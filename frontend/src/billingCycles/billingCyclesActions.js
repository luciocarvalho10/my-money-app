import Axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'

const url = 'http://localhost:3003/api'

export const getList = () => {
  const request = Axios.get(`${url}/billingCycles`)
  return { type: 'BILLING_CYCLES_FETCHED', payload: request }
}

export const create = values => {
  return dispatch => {
    Axios.post(`${url}/billingCycles`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação realizada com sucesso!')
        dispatch([
          resetForm('BillingCyclesForm'),
          getList(),
          selectTab('tabList'),
          showTabs('tabList', 'tabCreate')
        ])
      })
      .catch(e =>
        e.response.data.errors.forEach(er => toastr.error('Erro', er))
      )
  }
}

export const showUpdate = billingCycle => [
  showTabs('tabUpdate'),
  selectTab('tabUpdate'),
  initialize('BillingCyclesForm', billingCycle)
]