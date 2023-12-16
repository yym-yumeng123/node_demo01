var buf = Buffer.from('abc');
console.log(buf);


const fs = require("fs")
const protobuf = require("protocol-buffers")
const schema = protobuf(fs.readFileSync(__dirname + '/test.proto', 'utf-8'))

console.log('schema',schema)

var buf = schema.Test.encode({
  num: 42,
  payload: 'hello world'
})

console.log('buf',buf)

var obj = schema.Test.decode(buf)
console.log(obj) // should print an object similar to above