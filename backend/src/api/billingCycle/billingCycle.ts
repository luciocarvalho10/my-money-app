import restful from 'node-restful'
const mongoose = restful.mongoose

type name = {
  type: String
  required: true
}

type value = {
  type: Number
  required: true
}

const creditSchema = new mongoose.Schema({ name: <name>{}, value: <value>{} })

const debtSchema = new mongoose.Schema({
  name: <name>{},
  value: <value>{},
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: [ 'PAGO', 'PENDENTE', 'AGENDADO' ]
  }
})

const billingCycleSchema = new mongoose.Schema({
  name: <name>{},
  month: { type: Number, min: 0, max: 12, required: true},
  year: { type: Number, min: 1970, max: 2100, required: true},
  credits: [creditSchema],
  debt: [debtSchema]
})

export default restful.model('BillingCycle', billingCycleSchema)