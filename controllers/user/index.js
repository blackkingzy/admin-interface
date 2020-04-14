const jwt = require("jsonwebtoken");

exports.login = function (req, res, next) {
  const userInfo = { name: "admin", password: "123456" };
  const token = jwt.sign(userInfo, "login", {
    exp: 6000, //3分钟过期,秒为单位
    //algorithm: 'RS256'//加密算法
  });
  const params = {
    code: 20000,
    data: token,
  };
  res.send(params);
};

exports.getInfo = function (req, res, next) {
  const params = {
    code: 20000,
    data: {
      roles: ["admin"],
      introduction: "I am a super administrator",
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      name: "Super Admin",
    },
  };
  res.send(params);
};

exports.logout = function (req, res, next) {
  const params = { code: 20000, data: "success" };
  res.send(params);
};
