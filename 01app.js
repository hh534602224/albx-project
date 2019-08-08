// 引入模块
const express=require('express');
const router=require('./02router.js')
const bodyParser = require('body-parser');
const session = require('express-session')//登录状态保持需要的
// 创建服务器
const app=express();
app.listen(8808,()=>{
    console.log('http://127.0.0.1:8808');
})
// 把静态资源托管去服务器
app.use('/assets',express.static('assets'))
app.use('/uploads',express.static('uploads'))
// 设置模板引擎
app.set('view engine','ejs')
/* 下面这句代码是进行ejs模板文件查询的默认目录配置，下面这句代码写完之后，以后所有的ejs
资源都会在指定的__dirname+"/views" */
app.set('views',__dirname+"/views")
// 通过中间件把bodyParser应用到后面的js
app.use(bodyParser.urlencoded({ extended: false }));
// 在express中使用session中间件,因为默认情况下，express并不会开启sesison的使用
app.use(session(
    {
        // 加盐
        secret: 'hhhhh',//相当于一个加密密钥，my_albx_35值可以是任意字符串
        resave: true,//强制session保存到session store中,不管Session有没有更新，都强制保存
        saveUninitialiazed: false //强制没有‘初始化’的session保存到storage中
    }
))
// 添加全局的中间件，每次请求都会经过这个中间件
app.use(function (req, res, next) {
    /* 在三种情况是不用重定向到登录的 1.已经通过了登录，并且没过期 2.跳转登录页面  3.前台的3个页面（非后台的页面） */
    if (req.session.isLogin && req.session.isLogin == 'true' || req.url == '/admin/login' || req.url.indexOf('/admin') == -1) {
        next()
    } else {
        // redirect:实现重定向
       res.redirect('/admin/login')
    } 
})
// 让app使用Router进行路由管理
app.use(router);




