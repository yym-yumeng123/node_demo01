/**
 * express 基于 Node.js web 框架应用
 * 封装了一些工具包 便于开发HTTP服务
 */


/**
 * 路由: 应用程序如何响应客户端对特定端点的请求
 * app.method(path, callback)
 */

/**
 * 中间件 Middleware 本质是一个回调函数
 * 中间件可以像路由回调一样访问 request response
 * 
 * 作用: 使用函数封装公共操作, 简化代码
 * 
 * 
 * 全局中间件
 * 路由中间件
 */


/**
 * 静态资源中间件
 * 
 * app.use(express.static(__dirname + '/public))
 * 
 * index.html 默认打开资源
 * 如果静态资源与路由规则同时匹配, 水仙匹配谁就响应
 * 路由响应动态资源, 静态资源中间件响应静态资源
 */


/**
 * 防盗链: 禁止该域名之外的其他网站对资源访问
 * 
 * 原理: 报文 referer 请求头的判断
 */

/**
 * MongoDB 基于分布式文件存储的数据库
 * 1. 数据库: 是一个数据仓库, 数据库服务下可以创建很多数据库, 数据库可以存放很多集合
 * 2. 集合: 集合类似于 js 中的数组, 在集合中可以存放很多文档 (表)
 * 3. 文档: 文档是数据库的最小单位, 类似于 js 中的对象 (行)
 */

/**
 * 会话控制: 对会话进行控制
 * 
 * HTTP 是一种无状态的协议, 他没有办法区分多次请求是否来自同一个客户端, 无法区分用户
 * 
 * 常见的会话控制技术有三种: 
 * cookie
 * session
 * token
 */


/**
 * cookie: 是 HTTP 服务器发送到用户浏览器并保存在本地的一小块数据
 * 
 * cookie 是保存在浏览器端
 * cookie 是按照域名划分的
 * 
 * 特点:
 * 浏览器向服务器发送请求, 会自动将当前域名下 可用的 cookie 设置在请求头, 然后传递给服务器
 * 
 * cookie 运行流程:
 * 浏览器 填写账号和密码 => 校验通过下 发送 cookie 到 服务端, 服务端返回属于我们的 cookie (请求头: set-cookie)
 * 有了 cookie, 后序向服务器发送请求时, 自动携带 cookie
 * 
 */


/**
 * session: 保存在服务器端的一块数据, 保存当前用户的相关信息
 * 
 * 实现会话控制, 可以识别身份, 快速获取当前用户的相关信息
 * 
 * 流程:
 * 
 * 填写账号和密码, 校验身份通过后, 创建session 信息
 * 然后将 session_id 的值通过响应头返回给浏览器
 * 有了cookie, 下次发送请求时自动携带cookie, 服务器通过cookie中的 session_id 的值确定用户身份
 */

/**
 * token
 * 
 * token 是服务端生成并返回给 HTTP 尅护短的一串加密 字符串, token 保存着 用户信息
 * 
 * 实现会话控制, 可以识别用户的身份
 * 
 * 流程:
 * 
 * 填写账号密码, 身份校验通过 响应token, token 一般在响应体中返回给客户端
 * 后续发送请求, 携带token信息添加在请求报文中, 一般是放在请求头中
 * 
 * 
 * 特点:
 * 服务端压力更小
 * 数据加密;可以避免 跨站请求伪造
 * 扩展性更强: 服务间可以共享; 增加服务节点更简单
 * 
 * 
 * JWT JSON  Web Token
 * 
 */


