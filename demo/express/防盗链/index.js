const express = require('express')
const app = express()
const port = 3000

// 声明中间件 防盗链
app.use((req, res, next) => {
  // 检测请求头中的referer 是否为 127.0.0.1
  const referer = req.get("referer")
  if (referer) {
    const url = new URL(referer)
    const hostname = url.hostname
    if(hostname !== '127.0.0.1') {
      res.status(200).send("404")
      return
    }
  }
  next()
})

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))