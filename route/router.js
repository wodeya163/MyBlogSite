let express = require('express')
let router =express.Router()

router.get('/',function (req,res) {
    res.render('index.html',{title:"我的第一个网页"})
})
router.get('/2',function (req,res) {
    res.render('index2.html',{title:"我的第二个网页"})
})
module.exports = router