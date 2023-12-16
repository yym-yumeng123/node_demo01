const EasySock = require("easy_sock")

const easysock = new EasySock({
  ip: 'localhost',
  port: 4000,
  timeout: 500,
  keepAlive: true
})

easysock.encode = function (data, seq) {
}