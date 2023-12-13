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

interview(function (err) {
  if (err) {
    console.log("cry")
  }
  console.log("params", params)
})
