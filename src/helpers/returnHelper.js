const formatPhone = string => {
  if (string.indexOf("@") > -1) {
    if (string.indexOf("@c.us") > -1) {
      var res = string.replace("@c.us", "");
    } else if (string.indexOf("@s.whatsapp.net") > -1) {
      var res = string.replace("@s.whatsapp.net", "");
    }
  } else {
    var res = string;
  }
  return res;
};

const defaultReturn = (
  res,
  data,
  response_code,
  code,
  status,
  message,
  more_info
) => {
  const voReturn = {};

  voReturn.result = {
    response_code: response_code,
    code: code,
    status: status,
    message: message,
    more_info: more_info,
  };

  if (data) {
    voReturn.data = data;
  }

  res.statusCode = response_code;
  res.json(voReturn);
};

module.exports = { formatPhone, defaultReturn };
