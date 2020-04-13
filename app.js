// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const jwt = require('jsonwebtoken');



var app = express();


app.use(logger('dev')); //记录日志的中间件
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));// option属性可以设置各种条件

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
})



app.get('/', (req, res) => {
    res.send('Hello world');
});
app.listen(3001, () => {
    console.log('Server is running at http://localhost:3001')
})

app.post('/user/login', (req, res) => {
    const userInfo = { name: 'admin', password: '123456' }
    const token = jwt.sign(userInfo, "login", {
        expiresIn: 6000,//3分钟过期
        //algorithm: 'RS256'//加密算法
    });
    const params = {
        code: 20000,
        data: token
    }
    res.send(params)
})

app.get('/user/Info', (req, res) => {
    const params = {
        code: 20000,
        data: {
            roles: ["admin"],
            introduction: "I am a super administrator",
            avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
            name: "Super Admin"
        }
    }
    res.send(params)
})

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

module.exports = app;
