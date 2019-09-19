const jwt = require("jsonwebtoken");
const helper = require("../../helpers/returnHelper");

const authenticated = (req, res, next) => {
  const token = req.headers["authorization"];
  jwt.verify(token, 'gglgm"7_"Tx?MT-eyY_.[EoElhX6Fl', (err, decode) => {
    if (err) {
      helper.defaultReturn(
        res,
        false,
        308,
        708,
        "ERROR",
        "Token not provided",
        ""
      );
    } else {
      next();
    }
  });
};

module.exports = authenticated;
