const helper = require("../../helpers/returnHelper");

const erroController = {
  RouteNotFound: (req, res, next) => {
    helper.defaultReturn(res, false, 404, 404, "Route not Found", "", "");
  },
};

module.exports = { erroController };
