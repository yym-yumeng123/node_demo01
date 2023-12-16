var { graphql, buildSchema } = require("graphql")

var schema = buildSchema(
  `
  type Query {
    hello: String
  }
  `
)

var root = {
  hello: () => {
    return 'hello world'
  }
}

module.exports = function (query) {
  console.log('query',query)
  return graphql(schema, query, root).then(res => {
    console.log('res',res)
    return res
  })
}
