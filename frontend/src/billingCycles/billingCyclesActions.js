import Axios from 'axios'

const url = 'http://localhost:3003/api'

export const getList = () => {
  const request = Axios.get(`${url}/billingCycles`)
  return { type: 'BILLING_CYCLES_FETCHED', payload: request }
}
