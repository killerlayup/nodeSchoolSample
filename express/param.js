//建立一个可以处理 PUT '/message/:id' 请求的 Express.js 服务器。

// var express = require('express');
// var path = require('path');
// var app = express();
// // use 使用中间件
// app.use(express.static(process.argv[3]));

// app.listen(process.argv[2]);

var path = require('path');
var express = require('express');
var bodyparser = require('body-parser');
var crypto = require('crypto');
var app = express();
// stylus 中间件
var stylus = require('stylus');

// 设置template路径 自定义设置或者在template 目录下面
app.set('views', process.argv[3] || path.join(__dirname, 'templates'));
//告诉express 模板引擎

app.set('view engine', 'pug');
//使用bodyparser 中间件 
app.use(bodyparser.urlencoded({
	extended: false
}));
//stylus  中间件 放在静态文件夹里面
app.use(stylus.middleware(__dirname + '/public/'));
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')));

app.put('/message/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	var str = crypto.createHash('sha1').update(new Date().toDateString() + id).digest('hex');
	res.send(str);
});

app.get('/home', function(req, res) {
	res.render('index', {
		date: new Date().toDateString()
	})
});

app.post('/form', function(req, res) {
	// console.log(req);
	//str 是字段
	res.send(req.body.str.split('').reverse().join(''));
	// res.send("send");
});

app.listen(process.argv[2])