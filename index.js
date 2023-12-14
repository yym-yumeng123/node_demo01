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

!(function () {
  const promise = new Promise(function (reslove, reject) {
    setTimeout(() => {
      reslove(3)
    }, 500)
  }).then(function (res) {
    console.log("res", res)
  })

  console.log("Promise", promise)

  setTimeout(() => {
    console.log("promise1", promise)
  }, 800)
})()




console.log(async function() {
  const res = await "yym"
  console.log('res12',res)
})
