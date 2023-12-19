var express = require("express")
var router = express.Router()

/* 设置 session */
router.get("/login", function (req, res, next) {
  const { username, password } = req.query
  if (username === "admin" && password === "123456") {
    // 设置 session 信息
    req.session.username = "admin"

    res.send("新增成功")
  }
  res.send("失败")
})

// 读取 session
router.get("/cart", (req, res) => {
  // 检测 session 是否存在用户数据
  if (req.session.username) {
    res.send(`欢迎你 ${req.session.username}`)
  } else {
    res.send("还没登录")
  }
})

router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.send("销毁成功")
  })
})

module.exports = router
