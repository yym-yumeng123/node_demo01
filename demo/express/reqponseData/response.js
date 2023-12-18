const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 3000

// 解析json格式的请求体的中间件
const jsonParser = bodyParser.json()
// 解析queryString请求体
const urlencodeedParser = bodyParser.urlencoded({extended: false})

app.get('/', (req, res) => res.send('Hello World!'))

// 使用
app.post("/login", urlencodeedParser, (req, res) => {
  console.log('req.body',req.body)
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))