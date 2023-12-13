### CommonJS 模块规范

```js
// 导入
const result = require("url") // 默认 {}

// 导出
export.hello = "world"
export.add = (a, b) => a + b

module.exports = func minus(a, b) {
  return a - b
}
```


### npm

- Node.js 的包管理模块

```md
<!-- 初始化成 npm 包 -->
npm init

<!-- 安装 glob包 -->
npm install glob
<!-- 读取 package.json 依赖 -->
npm install

<!-- 卸载 -->
npm uninstall glob
```

### Node.js 内置模块

- File System 文件模块
- os 操作系统相关
- EventEmitter: 具备观察者模式 `addEventListener`
- etc.


### 异步: 非阻塞I/O

- I/O 即 Input/Output, 一个系统的输入和输出
- 阻塞I/O 和非阻塞 I/O 的区别就在于系统接收输入再到输出期间, 能不能接收其他输入.
- 非阻塞I/O => 在I/O过程中, 能不能进行其他I/O


举例:

- 排队打饭: 排队 -> 等待 -> 轮到自己 -> 打菜 -> 吃饭 
  - 饭堂师傅只能一份一份打饭 -> `阻塞 I/O`
- 餐厅点餐 坐下 -> 点餐 -> 等待 -> 吃饭
  - 服务员点完菜可以服务其他人 -> `非阻塞 I/O`