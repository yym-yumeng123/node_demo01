const fs = require("fs")

fs.writeFile("./demo/fs/create.txt", "你好", err => {
  if(err) {
    console.log("写入失败")
  } else {
    console.log("写入成功")
  }
})

fs.writeFileSync("./demo/fs/1.txt", "真好")


fs.appendFileSync("./demo/fs/1.txt", "\n真的好")


const ws = fs.createWriteStream("./demo/fs/1.txt")

ws.write("1")
ws.write("2")


/**
 * 写入文件场景:
 * 下载文件; 安装软件; 保存程序日志; 视频录制
 * 需要持久化保存数据
 */

// 读取
fs.readFile("./demo/fs/1.txt", (err, data) => {
  console.log('data',data.toString())
})

// 同步读取
let data = fs.readFileSync("./demo/fs/1.txt")

console.log('data',data)

/**
 * 读取文件应用场景
 * 电脑开机;程序运行;编辑器打开文件; 查看图片; 播放视频; 播放音乐
 */

/** 
 * 文件流式读取: 一块一块读
 * createReadStrean()
 */

const rs = fs.createReadStream("./demo/fs/1.txt")
rs.on("data", chunk => {
  console.log('chunk',chunk.length) // 65536 字节 => 64kb
})

rs.on("end", () => {
  console.log("读取完成")
})

/** 
 * 复制
 * 1. 读取, 写入到另一个文件 readFile writeFile
 * 2. 流式操作
 */


/**
 * 重命名 和 移动
 */
fs.rename('oldFile.txt', 'newFile.txt', (err) => {
  if (err) throw err;
  console.log('Rename complete!');
});


/**
 * 删除
 */

fs.unlink('path/file.txt', (err) => {
  if (err) throw err;
  console.log('path/file.txt was deleted');
});
// fs.rm()

/**
 * 文件夹操作
 */
fs.mkdir() // 创建
fs.readdir() // 读取


/**
 * 查看资源状态
 */
fs.stat()

/**
 * 路径: 
 * "./xxx"
 * "xxx"
 */