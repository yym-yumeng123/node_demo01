# node_demo01


### BFF层 Backend for Frontend

- 对用户册提供 HTTP 服务
- 使用后端 RPC 服务

```md
浏览器 -> node <- 微服务
```


### nodemon

### mysql2

CRUD

```js
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
    (err, result) => {}
  )
})

// 更新数据
router.put("/", function (req, res) {
  db.query(
    "update records set title = ? where id = ?",
    ["吃饭", 1],
    function (err, result) {}
  )
})

// 删除数据
router.delete("/", function (req, res) {
  db.query("delete from records where id = 1", function (err, result) {})
})
```

### 会话控制

1. cookie
2. session 通过 cookie 传递
   1. `npm install express-session` 中间件
3. token