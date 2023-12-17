/**
 * path.reslove 拼接规范的绝对路径
 * sep 获取操作符系统的路径分割符
 * parse 解析路径并返回对象
 * basename 路径的基础名称
 * dirname 路径的目录名
 * extname 扩展名
 */

const http = require("node:path")

path.reslove(__dirname, "index.name")

path.sep

// __filename 文件的绝对路径

// http.basename 

/**
 * HyperText Transfer Protocol 超文本传输协议
 * 协议: 约定 浏览器 服务器 通信
 * Client -> Server 请求报文
 * Server -> Client 响应报文
 */

/**
 * 请求报文:
 * GET http://xxx/ HTTP/1.1  `请求行` 请求方法 url http1.1
 * User-Agent: `请求头`
 * Accept-Language:
 * 空行
 * 请求体 传送的数据
 */


/**
 * 响应报文
 * HTTP/1.1 200 OK 响应行
 * Content-Type: text/html `响应头`
 * html/css/js/json/... 响应体
 */


// IP: 本身是一个数字标识, IP地址  32Bit 二进制数字
// IP分类: IPV4 IPV6 局域网/广域网/本地回环IP
// 本地回环 IP地址 127.0.0.1

// 端口: 应用程序的数字标识/实现不同主机应用程序之间的通信


/**
 * http服务注意事项:
 * Ctrl C 停止服务
 * 更新代码需重新启动
 * 响应中文乱码解决: Content-Type: text/html;charset=utf-8
 * 端口被占用
 * HTTP 默认端口 80;
 * HTTPS 默认端口 443
 */


/**
 * 获取HTTP请求报文
 * request.method 请求方法
 * request.url 请求路径
 */


/**
 * 网页加载基本过程
 * 1. 先去请求 html, 在 head 里面发现 link css, 
 * 2. 开始请求 css 
 * 3. 有图片就去请求图片
 * 4. 有 script 请求js
 * 5. DOM CSSOM => render tree
 */


/**
 * 静态资源: 图片 视频 css js html 等
 * 动态资源 经常更新的资源 => 新闻首页
 */


/**
 * 绝对路径: http://atguigu.com/web
 */

/**
 * 资源类型: mime 类型 
 * 媒体类型: Multipurpose internet mail extensions 是一种标准, 表示文档 文件或字节流的性质和格式
 * html:  text/html
 * css: text/css
 * js text/javascript
 * json: application/json
 */