import path from "path";
import fs from "fs";
import camelCase from "lodash/camelCase.js";
import genCss from "../src/utils/gen-css.js";
import genLess from "../src/utils/gen-less.js";
import { genEsm, genLib } from "../src/utils/gen-js.js";
import { dirname } from "../src/utils/polyfill.js";
import forEachPromised from "../src/utils/for-each-promised.js";

const __dirname = dirname(import.meta);

const THEME_PATH = "../src/theme";

const buildOptions = [
  {
    extname: "css",
    output: "dist",
    build: genCss,
  },
  {
    extname: "less",
    output: "dist",
    build: genLess,
  },
  {
    extname: "js",
    output: "es",
    build: genEsm,
    indexExport: true,
  },
  {
    extname: "js",
    output: "lib",
    build: genLib,
    indexExport: true,
  },
];

function createBuilder() {
  const cache = {};
  return async function build(option) {
    const indexExports = [];
    const readPath = path.join(__dirname, THEME_PATH);
    const writePath = path.join(__dirname, "../", option.output);
    const files = fs.readdirSync(readPath);

    await forEachPromised(files, async (filePath) => {
      const themeFileName = path.basename(filePath, ".json");
      const themeName = camelCase(themeFileName);
      const themeFilePath = path.join(__dirname, THEME_PATH, filePath);
      let variables = cache[themeName];
      if (!variables) {
        variables = JSON.parse(fs.readFileSync(themeFilePath));
        cache[themeName] = variables;
      }
      const content = option.build(themeName, variables);
      if (!fs.existsSync(writePath)) fs.mkdirSync(writePath);
      fs.writeFileSync(
        path.join(writePath, `${themeFileName}.${option.extname}`),
        content,
        { encoding: "utf-8" }
      );
      if (option.indexExport) {
        if (option.output === "es") {
          indexExports.push(
            `export { default as ${themeName} } from "./${themeFileName}.${option.extname}";`
          );
        } else if (option.output === "lib") {
          indexExports.push(
            `exports.${themeName} = require("./${themeFileName}.${option.extname}");`
          );
        }
      }
    });

    if (indexExports.length > 0) {
      fs.writeFileSync(
        path.join(writePath, `index.js`),
        indexExports.join("\n"),
        {
          encoding: "utf-8",
        }
      );
    }
  };
}

async function main() {
  try {
    let builder = createBuilder();
    await forEachPromised(buildOptions, async (option) => {
      await builder(option);
    });
    builder = null;

    fs.copyFileSync(
      path.join(__dirname, "../src/index.d.ts"),
      path.join(__dirname, "../dist", "index.d.ts")
    );
  } catch (error) {
    console.log(">>>> Build error ----------");
    console.log(error);
    console.log(">>>> Build error ----------");
    process.exit(1);
  }
  console.log(">>>> Build success!");
}

main();
