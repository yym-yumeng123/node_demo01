const http = require("node:http")
const fs = require("node:fs")

/**
 * 网站根目录: HTTP服务在那个文件夹找静态资源, 那个文件夹就是静态资源目录, 称为 网站根目录 
 */
const server =http.createServer((req, res) => {
  let {pathname} = new URL(req.url, "http://127.0.0.1")
  let filePath = __dirname + "/page" + pathname

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500
      res.end("文件读取失败")
      return
    }
    // 响应文件内容
    res.end(data)
  })
})

server.listen(8080)