const express = require('express')
const auth = require('./auth')

module.exports = (server) => {

  // Rotas rpotegidas Token JWT
  const protectedAPI = express.Router()
  server.use('/api', protectedAPI)

  protectedAPI.use(auth)

  const BillingCycleService = require('../api/billingCycle/billingCycleService')
  BillingCycleService.register(protectedAPI, '/billingCycles')


  // Rotas abertas
  const openAPI = express.Router()
  server.use('/opai', openAPI)

  const authService = require('../api/user/authService')
  openAPI.post('/login', authService.login)
  openAPI.post('/signup', authService.signup)
  openAPI.post('/validateToken', authService.validateToken)
}