const Koa = require("koa")
const fs = require("fs")

const app = new Koa()

app.use(async (ctx) => {
  ctx.body = fs.readFileSync(__dirname + "/source/index.htm", 'utf-8')
} ) 


app.listen(3000)