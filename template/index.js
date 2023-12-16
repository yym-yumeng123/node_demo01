const user = {
  name: "haha"
}

const result = `<h2>${user.name}</h2>`

const vm = require('vm')

vm.runInNewContext('`<h2>${user.name}</h2>`')