var createError = require("http-errors")
var express = require("express")
var path = require("path")
var cookieParser = require("cookie-parser")
var logger = require("morgan")
const session = require("express-session")

var indexRouter = require("./routes/index")
var usersRouter = require("./routes/users")
var recordsRouter = require("./routes/record")

var app = express()

// view engine setup
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "jade")

// 中间件
app.use(logger("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, "public")))

// session 中间件
app.use(
  session({
    name: "session_id", // 设置 cookie 的name
    secret: "atguigu", // 参与加密的字符串 (又称签名)
    resave: true, // 是否在每次请求时重新保存 session
    saveUninitialized: true, // 是否为每次请求都设置一个 cookie 用来存储 session 的 id
    cookie: { httpOnly: true, maxAge: 1000 * 300 },
  })
)

app.use("/", indexRouter) // 路由前缀
app.use("/users", usersRouter)
app.use("/record", recordsRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get("env") === "development" ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render("error")
})

module.exports = app
