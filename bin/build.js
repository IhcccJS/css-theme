const path = require("path");
const fs = require("fs");
const genCss = require("../src/utils/gen-css.js");
const genLess = require("../src/utils/gen-less.js");
const { genEsm, genLib } = require("../src/utils/gen-js.js");

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
    exportIndex: true,
  },
  {
    extname: "js",
    output: "lib",
    build: genLib,
    exportIndex: true,
  },
];

function build(option) {
  const indexExports = [];
  const readPath = path.join(__dirname, "../src/theme");
  const outpath = path.join(__dirname, "../", option.output);
  const files = fs.readdirSync(readPath);

  for (let i = 0; i < files.length; i++) {
    const variables = require(path.join(readPath, files[i]));
    const themeName = path.basename(files[i], ".ts");
    const content = option.build(themeName, variables);
    if (!fs.existsSync(outpath)) fs.mkdirSync(outpath);
    fs.writeFileSync(
      path.join(outpath, `${themeName}.${option.extname}`),
      content,
      { encoding: "utf-8" }
    );
    if (option.exportIndex) {
      if (option.output === "es") {
        indexExports.push(
          `export { default as ${themeName} } from "./${themeName}.${option.extname}";`
        );
      } else if (option.output === "lib") {
        indexExports.push(
          `exports.${themeName} = require("./${themeName}.${option.extname}");`
        );
      }
    }
  }
  if (indexExports.length > 0) {
    fs.writeFileSync(path.join(outpath, `index.js`), indexExports.join("\n"), {
      encoding: "utf-8",
    });
  }
}

function main() {
  try {
    buildOptions.map(build);
  } catch (error) {
    console.log(">>>> Build error ----------");
    console.log(error);
    console.log(">>>> Build error ----------");
    process.exit(1);
  }
  console.log(">>>> Build success!");
}

main();
