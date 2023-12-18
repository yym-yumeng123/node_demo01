const express = require('express')
const router = express.Router() // 创建路由对象

router.get("/hemo", (req, res) => {
  res.send("前台首页")
})


router.get("/serrch", (req, res) => {
  res.send("内容搜索")
})

module.exports = router