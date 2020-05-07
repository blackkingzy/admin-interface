exports.create = function (req, res, next) {
  console.log(req.body);
  const params = {
    code: 20000,
    data: {
      result: true,
    },
  };
  res.send(params);
};
