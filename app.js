// var createError = require('http-errors');
var express = require('express');

var app = express();

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var http = require('http').createServer(app);
var io = require('socket.io')(http);


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


require('./api')(app)


io.on('connection', (socket) => {
    console.log('a user connected');
});

http.listen(3001, () => {
    console.log('Server is running at http://localhost:3001')
})


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

module.exports = app;
