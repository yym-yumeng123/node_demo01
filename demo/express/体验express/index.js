const express = require("express")
const recordMiddleware = require("./middle")
const homeRouter = require("./routes/homeRouter")
const app = express()
const port = 3000

// 使用全局中间件函数
app.use(recordMiddleware)
app.use(homeRouter) // 设置路由

app.get("/", (req, res) => res.send("Hello World!"))

app.get("/request", (req, res) => {
  // 获取请求参数
  console.log("req.method", req.method)
  console.log("req.path", req.path)
  console.log("req.query", req.query)
  res.status(200).json({
    code: 200,
  })
})

app.get("/routers/:id", (req, res) => {
  // 获取路由参数
  console.log("req.params.id", req.params.id)
})

app.post("/response", (req, res) => {
  // 可以链式调用
  res.status(200)
  res.set("xxx", "yyy")
  res.send("express")

  res.redirect("/xxx") // 跳转
  res.download() // 下载
  res.json()
})

app.get("/home", (req, res) => {
  res.status(200).json({
    code: 200,
  })
})

app.get("/set-cookie", (req, res) => {
  // 设置 cookie
  res.cookie("name", "yym", { maxAge: 60 * 1000 })
})

app.get("/delete-cookie", (req, res) => {
  // 删除cookie
  res.clearCookie("name")
})

app.get("/read-cookie", (req, res) => {
  // 读取cookie
  // install cookie-parser
})

app.all("*", (req, res) => {
  res.end("404")
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
