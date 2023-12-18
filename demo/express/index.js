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