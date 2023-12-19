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


### 本地域名

1. 编辑文件 `C:\Windows\System32\drivers\etc\hosts`  `127.0.0.1 www.yangyumeng.com`
  

**原理**

- 在地址栏输入 url 之后, 浏览器会先进行 DNS (Domain Name Search) 查询, 获取该域名对应的IP地址,
- 请求会发送到 DNS 服务器, 可以`根据 域名返回 IP 地址`
- 可以通过 `ipconfig/all` 查看本机的DNS服务器
- hosts 文件也可以设置域名和IP的映射关系, 在发送请求前, 通过该文件获取域名的 IP 地址
  - 存放 ip 和 域名的映射
