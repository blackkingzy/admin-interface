var fs = require('fs')
var path = require('path');

exports.create = function (req, res, next) {
    console.log(req.body)
    const params = {
        code: 20000,
        data: {
            result: true
        }
    }
    res.send(params)
}
//文章内图片上传
exports.imgUpload = function (req, res, next) {
    // console.log(req.file);单文件
    // console.log(req.files);多文件
    // console.log(req.body);表单的其它构成在这里面
    //执行完中间件文件已经上传到服务器
    for (let file of req.files) {
        //path.parse()不仅仅是对路径分析，也可以对其他分析，来获取你想要的东西,比如这里
        const newName = file.path + path.parse(file.originalname).ext
        fs.renameSync(file.path, newName)//对于文件的操作一定得用fs,这里改名就是为了预览和将来能够访问
        file.filename += path.parse(file.originalname).ext
        file.path += path.parse(file.originalname).ext //这里没用到，以后有可能改就不删除了
    }
    const _baseurl = 'http://localhost:3001/upload_images/';
    var url = _baseurl + req.files[0].filename
    res.send({
        code: 20000,
        msg: '成功',
        url: url
    })
}

exports.imgDelete = function (req, res, next) {
    console.log(req.query)
    const path1 = path.join(__dirname, '..', '..', 'public', 'upload_images', req.query.imgName)
    console.log(path1)
    fs.unlink(path1, () => {
        console.log('删除成功')
    })
    let params = {
        code: 20000,
        msg: '删除成功'
    }
    res.send(params)
}