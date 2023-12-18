var express = require("express")
var router = express.Router()
const { formidable } = require("formidable")

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" })
})

router.get("/portrait", (req, res) => {
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
