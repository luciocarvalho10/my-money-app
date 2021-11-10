import Axios from 'axios'
import {toastr} from 'react-redux-toastr'

const url = 'http://localhost:3003/api'

export const getList = () => {
  const request = Axios.get(`${url}/billingCycles`)
  return { type: 'BILLING_CYCLES_FETCHED', payload: request }
}

export const create = values => {
  Axios.post(`${url}/billingCycles`, values)
    .then(resp => toastr.success('Sucesso', 'Operação realizada com sucesso!'))
    .catch(e => e.response.data.errors.forEach(er => toastr.error('Erro', er)))
  return {
    type: 'TEMP'
  }
}