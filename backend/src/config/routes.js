const express = require('express')

module.exports = (server) => {

  // Definir URL para todas as rotas
  const router = express.Router()
  server.use('/api', router)

  // Rotas de ciclos de pagamento
  const BillingCycleService = require('../api/billingCycle/billingCycleService')
  BillingCycleService.register(router, '/billingCycles')
}