import kebabCase from "lodash/kebabCase.js";

function genCSSVariables(name, variables) {
  const formatVariable = (key, value) => {
    return `  --${kebabCase(key)}: ${value || '""'};`;
  };

  const content = Object.entries(variables)
    .map(([key, value]) => formatVariable(key, value))
    .join("\n");

  if (name === "default") {
    return `:root {
${content}
}`;
  }

  return `html[theme="${name}"] {
${content}
}`;
}

export default genCSSVariables;
