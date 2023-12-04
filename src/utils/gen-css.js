function genCSSVariables(name, variables) {
  const formatVariable = (key, value) => {
    return `${key}: ${value}`;
  };

  return `
    html[theme="${name}"] {
      ${Object.keys(variables)
        .map((key) => formatVariable(key, variables[key]))
        .join("\n")}
    }
  `;
}

export default genCSSVariables;
