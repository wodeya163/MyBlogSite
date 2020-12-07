//导入express开发依赖
let express = require('express')
let router = require('./route/router')
let bodyParser = require('body-parser')
let path = require('path')
//建立app启动对象
let app = express()

//开放静态资源
app.use('/public',express.static(path.join(__dirname,'./public/')))
//设置路由页面默认目录
app.set('/views',path.join(__dirname,'./views/'))
//配置模板引擎
app.engine('html',require('express-art-template'))
//配置body-parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
//配置路由
app.use(router)
//启动服务
app.listen('3000',function (err) {
    if(err)
    {
        console.log(err)
    }
    else
    {
        console.log('服务器启动中-----')
    }
})