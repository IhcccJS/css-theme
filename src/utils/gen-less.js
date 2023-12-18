function genLessVariables(_name, variables) {
  const formatVariable = (key, value) => {
    return `@${key}: ${value || '""'};`;
  };

  return Object.keys(variables)
    .map((key) => formatVariable(key, variables[key]))
    .join("\n");
}

export default genLessVariables;
