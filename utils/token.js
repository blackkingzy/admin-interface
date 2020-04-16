const jwt = require("jsonwebtoken");
const secret = "zhangyue";

exports.generate = function (Info) {
  const token = jwt.sign(Info, secret, {
    expiresIn: 60 * 30, //30分钟过期,秒为单位
    //algorithm: 'RS256'//加密算法
  });
  return token;
};

exports.verify = function (token) {
  let res;
  jwt.verify(token, secret, function (err, data) {
    if (err) {
      res = false;
    } else {
      res = true;
    }
  });
  return res;
};
