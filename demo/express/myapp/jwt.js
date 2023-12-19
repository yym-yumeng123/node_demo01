const jwt = require("jsonwebtoken")

// 创建生成 token
const token = jwt.sign(
  {
    username: "admin",
  },
  "atguigu",
  {
    expiresIn: 60, // 秒
  }
)


// 校验 token

jwt.verify(token, "atguigu")