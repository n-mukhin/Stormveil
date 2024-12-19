const os = require('os')
const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const schema = buildSchema(`
  type Query {
    hostname: String
    platform: String
    uptime: Float
    load: [Float]
    freemem: Float
    totalmem: Float
  }
`)
const root = {
  hostname: () => os.hostname(),
  platform: () => os.platform(),
  uptime: () => os.uptime(),
  load: () => os.loadavg(),
  freemem: () => os.freemem(),
  totalmem: () => os.totalmem()
}
const app = express()
app.use('/graphql', graphqlHTTP({ schema, rootValue: root, graphiql: true }))
app.listen(process.env.PORT || 3000)
