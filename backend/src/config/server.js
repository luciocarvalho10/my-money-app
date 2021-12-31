const port = 3003
const date = new Date().toLocaleTimeString()
const backlog = () => console.log(`BACKEND is runnig at ${port} - ${date}`)

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const cors = require('./cors')
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(cors)
server.use(queryParser())

server.listen(port, backlog)

module.exports = server