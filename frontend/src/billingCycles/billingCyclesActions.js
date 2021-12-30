import Axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'

const url = 'http://localhost:3003/api'
const INITIAL_VALUES = {credits: [{}], debts: [{}]}

export const getList = () => {
  const request = Axios.get(`${url}/billingCycles`)
  return { type: 'BILLING_CYCLES_FETCHED', payload: request }
}

export const init = () => [
  showTabs('tabList', 'tabCreate'),
  selectTab('tabList'),
  getList(),
  initialize('BillingCyclesForm', INITIAL_VALUES)
]

const submit = (values, method) => {
  return dispatch => {
    const id = values._id ? values._id : ''
    Axios[method](`${url}/billingCycles/${id}`, values)
      .then(resp => {
        toastr.success('Sucesso', 'Operação realizada com sucesso!')
        dispatch(init())
      })
      .catch(e =>
        e.response.data.errors.forEach(er => toastr.error('Erro', er))
      )
  }
}

export const create = values => submit(values, 'post')

export const update = values => submit(values, 'put')

export const remove = values => submit(values, 'delete')

export const showUpdate = billingCycle => [
  showTabs('tabUpdate'),
  selectTab('tabUpdate'),
  initialize('BillingCyclesForm', billingCycle)
]

export const showDelete = billingCycle => [
  showTabs('tabDelete'),
  selectTab('tabDelete'),
  initialize('BillingCyclesForm', billingCycle)
]