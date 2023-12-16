const net = require('net')

const server = net.createServer((socket) => {
  socket.on('data', (buffer) => {
    console.log('buffer',buffer)
  })
})


server.listen(4000)