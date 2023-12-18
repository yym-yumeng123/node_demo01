const fs = require("fs")
const path = require("path")
/**
 * 记录每个请求 url 和 ip
 */

// 声明
let recordMiddleware = function(req, res, next) {
  // 实现功能代码
  const {url, ip} = req
  fs.appendFileSync(path.resolve(__dirname, "./access.log"), `${url} ${ip}\r\n`)
  // 执行 next 函数 (希望执行中间件函数之后, 仍然继续执行路由中的回调函数, 必须调用 next)
  next()
}

module.exports = recordMiddleware