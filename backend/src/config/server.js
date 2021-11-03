const port = 3003
const backlog = () => console.log(`BACKEND is runnig at ${port} - ${new Date()}`)

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('./cors')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors)

server.listen(port, backlog)

module.exports = server