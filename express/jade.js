// var express = require('express');
// var path = require('path');
// var app = express();
// // use 使用中间件
// app.use(express.static(process.argv[3]));

// app.listen(process.argv[2]);

var path = require('path');
var express = require('express');
var app = express();
var jade = require('jade');
// 设置template路径 自定义设置或者在template 目录下面
app.set('views', process.argv[3] || path.join(__dirname, 'templates'));
//告诉express 模板引擎

app.set('view engine', 'jade')

// app.use(express.static(process.argv[3] || path.join(__dirname, 'templates')));

app.get('/home', function(req, res) {
	res.render('index', {
		date: new Date().toDateString()
	})
});


app.listen(process.argv[2])