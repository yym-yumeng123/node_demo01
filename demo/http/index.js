const http = require("http")
const url = require("url")

// 创建服务对象
const server = http.createServer(function (request, response) {
  // 获取请求方法
  console.log("request.method", request.method)
  // 请求url
  console.log("request.url", request.url)
  // HTTP 版本
  console.log("request.httpVersion", request.httpVersion)
  // HTTP 请求头
  console.log("request.headers", request.headers)
  // 获取请求体
  let body = ""
  request.on("data", (chunk) => {
    body += chunk
  })
  request.on("end", () => {
    console.log("body", body)
  })

  // 提取HTTP报文URL路径
  // 解析request.url
  let res = url.parse(request.url)
  console.log(res.pathname) // 路径
  console.log("res.query", res.query) // 查询字符串

  // 设置HTTP 响应报文
  response.statusCode = 200 // 设置响应状态码
  response.statusMessage = "成功" // 设置响应描述
  response.setHeader("content-type", "") // 设置响应头

  response.writeHead(200, { "Content-Type": "text/plain" })
  // 设置响应体
  response.end("Hello World")
})
// 监听端口, 启动服务
server.listen(8081, () => {
  console.log("服务启动")
})

console.log("Server running at http://127.0.0.1:8081/")
