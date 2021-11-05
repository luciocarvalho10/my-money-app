import Axios from 'axios'
const url = 'http://localhost:3003/api'

export const getSummary = () => {
  const req = Axios.get(`${url}/billingCycles/summary`)
  return { type: 'SUMMARY_FETCHED', payload: req }
}
