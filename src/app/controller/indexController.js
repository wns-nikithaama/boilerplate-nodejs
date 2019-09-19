const { name, version, description } = require("../../../package.json");
const helper = require("../../helpers/returnHelper");

const indexController = {
  index: (req, res, next) => {
    let data = { name, version, description };
    helper.defaultReturn(res, data, 200, 200, "SUCESSO 1000%", "", "");
  },
};

module.exports = { indexController };
