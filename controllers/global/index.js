const whiteList = ["/user/login", "/user/logout"];
const token = require("../../utils/token");
exports.userTokenVerify = function (req, res, next) {
  //不仅要过滤掉完全匹配的接口，还要放开图片请求
  if (whiteList.indexOf(req.originalUrl) !== -1 || req.originalUrl.indexOf('upload_images')!==-1) {
    next();
  } else {
    const userToken = req.headers.authorization;
    const result = token.verify(userToken);
    if (result) {
      // console.log('解析的数据', data)
      next();
    } else {
      const params = { code: 50008, message: "Token expired" };
      res.send(params);
    }
  }
};
