var express = require("express")
var router = express.Router()
const { formidable } = require("formidable")

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" })
})

// 记账本列表
router.get("/account", function (req, res, next) {
  res.send("账本列表")
  // 假设渲染了 view 页面 列表
  // res.render("../views/index.jade")
})


// 添加记录
router.get("/account/create", function (req, res, next) {
  res.send("创建账本")
})

// 新增记录
router.post("/account", function (req, res, next) {
  res.send("添加记录")
})

router.get("/portrait", (req, res) => {
  // 获取请求体数据
  console.log('req.body',req.body)
  res.render()
})

// 文件上传 也是 http 报文请求
router.post("/portrait", (req, res) => {
  const form = formidable({
    multiples: true,
    // 上传文件的保存目录
    uploadDir: __dirname + "/",
    // 保持文件后缀
    keepExtensions: true,
  })
  // 解析请求报文
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err)
      return
    }
    let url = files.portrait.newFilenames
    res.send(url)
  })
})

module.exports = router
