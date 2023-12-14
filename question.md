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

### 异步: 非阻塞 I/O

- I/O 即 Input/Output, 一个系统的输入和输出
- 阻塞 I/O 和非阻塞 I/O 的区别就在于系统接收输入再到输出期间, 能不能接收其他输入.
- 非阻塞 I/O => 在 I/O 过程中, 能不能进行其他 I/O

举例:

- 排队打饭: 排队 -> 等待 -> 轮到自己 -> 打菜 -> 吃饭
  - 饭堂师傅只能一份一份打饭 -> `阻塞 I/O`
- 餐厅点餐 坐下 -> 点餐 -> 等待 -> 吃饭
  - 服务员点完菜可以服务其他人 -> `非阻塞 I/O`

### 回调函数 callback

- error first callback 第一个参数是 error
- node-style callback

```js
function interview(callback) {
  setTimeout(() => {
    const rand = Math.random() * 10
    if (rand > 5) {
      callback(null, "success")
    } else {
      callback(new Error("fail"))
    }
  }, 500)
}

// 多次会产生回调地狱
interview(function (err) {
  if (err) {
    console.log("cry")
  }
  console.log("params", params)
  interview(function (err) {
    interview(function (err) {
    
    })
  })
})

```

### 事件循环 EVENT LOOP

```js
// 模拟事件循环
const eventloop = {
  queue: [],
  loop() {
    while (this.queue.length) {
      var callback = this.queue.shift()
      callback()
    }
    setTimeout(this.loop.bind(this), 50)
  },
  add(callback) {
    this.queue.push(callback)
  },
}

eventloop.loop()

setTimeout(() => {
  eventloop.add(function () {
    console.log("1", 1)
  })
}, 500)
setTimeout(() => {
  eventloop.add(function () {
    console.log("2", 2)
  })
}, 500)
```

### promise

- 当前事件循环得不到的结果, 但未来的事件循环会给到你结果
- 是一个状态机
  - pending
  - fulfilled/resloved
  - rejected
- `.then .catch`
  - resolved 状态的 Promise 会回调后面第一个 .then
  - rejected 状态的 Promise 会回调后面的第一个 .catch
- 执行 then 和 catch 会返回一个新 Promise, 该 Promise 最终状态根据 then 和 catch 的回调函数的执行结果决定
  - 回调函数最终是 throw, Promise 是 rejected 状态
  - 回调函数最终是 return , Promise 是 resolved 状态
  - 回调函数 return 一个 Promise, 该 Promise 会和回调函数 return 的 Promise 状态保持一致

```js

!function() {
  const promise = new Promise(function (reslove, reject) {
    setTimeout(() => {
      reslove(3)
    }, 500);
  }).then(function(res) {
    console.log('res',res)
  })

  console.log('Promise',promise)
  
  setTimeout(() => {
    console.log('promise1',promise)
  }, 800)

}()
```


### async await

是 promise 的语法糖

异步编程的终极方案: 以同步的方式写异步

- await 可以 "暂停" async function 的执行
- await 可以以 同步的写法获取 Promise 的执行结果
- try-catch 可以获取 await 所得到的错误

穿越事件循环存在的 function


### HTTP 服务器

一个网页请求, 包含两次 HTTP 包交换

- 浏览器向HTTP服务器发送请求HTTP包
- HTTP包服务器向浏览器返回HTTP包


HTTP 服务做什么事情

- 解析进来的HTTP请求报文
- 返回对应的 HTTP 返回报文


### Express

- 路由系统
- 处理 HTTP
- 支持 模板引擎
- 脚手架