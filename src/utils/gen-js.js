function genEsm(_name, variables) {
  return "export default " + JSON.stringify(variables, null, 2);
}

function genLib(_name, variables) {
  return "module.exports = " + JSON.stringify(variables, null, 2);
}

module.exports = {
  genEsm,
  genLib,
};
