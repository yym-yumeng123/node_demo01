var express = require("express")
var router = express.Router()
const db = require("../db/db")

/* 获取记录 */
router.get("/", function (req, res, next) {
  db.query("select * from records", function (err, result) {
    if (err) {
      console.log("err.message", err.message)
      return
    }
    res.json({
      code: 200,
      message: "获取成功",
      data: result,
    })
  })
})

// 新增记录
router.post("/", function (req, res, next) {
  db.query(
    "insert into records(id, title) values(2, ?)",
    ["买菜"],
    (err, result) => {
      if (err) {
        console.log("err.message", err.message)
        return
      }
      res.json({
        code: 200,
        message: "添加成功",
      })
    }
  )
})

// 更新数据
router.put("/", function (req, res) {
  db.query(
    "update records set title = ? where id = ?",
    ["吃饭", 1],
    function (err, result) {
      if (err) {
        console.log("err.message", err.message)
        return
      }
      res.json({
        code: 200,
        message: "更新成功",
      })
    }
  )
})

// 删除数据
router.delete("/", function (req, res) {
  db.query("delete from records where id = 1", function (err, result) {
    if (err) {
      console.log("err.message", err.message)
      return
    }
    res.json({
      code: 200,
      message: "删除成功",
    })
  })
})

module.exports = router
