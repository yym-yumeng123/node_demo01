/**
 * 模块化: 将一个复杂文件依据一定规则拆分成多个文件的过程称为模块化
 * 1. 防止命名冲突
 * 2. 高复用性
 * 3. 高维护性
 */

// 暴露数据
module.exports = "你好"
module.exports = {
  A, 
  B
}

exports.A = A // module.exports = {}
exports.C = C


// 导入
/**
 * js json 文件导入不用写后缀
 * 如果导入文件夹, 首先检测 package.json 文件中 main 对应的文件, 存在则导入, 不存在会报错
 */
require("url")