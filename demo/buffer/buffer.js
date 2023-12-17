// Buffer 是一个类似于数组的对象, 用于表示固定长度的字节序列
// 本质是 一段内存空间, 处理 二进制数据

/**
 * Buffer 大小固定且无法调整
 * 直接对内存进行操作
 * 每个元素的大小为 1字节 byte
 */


// alloc 创建了一个长度为 10字节的 Buffer, 申请了 10字节的内存空间, 每个字节的值为 0
const b1 = Buffer.alloc(10)

// allocUnsafe
const b2 = Buffer.allocUnsafe(10)

// from 通过字符串创建Buffer
const b3 = Buffer.from("hello")

console.log(b1, b2, b3)

// buffer string 转换
b3.toString()

b3[0]
