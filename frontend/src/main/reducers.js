import { combineReducers } from 'redux'
import {reducer as form} from 'redux-form'

import dashboard from '../dashboard/dashboardReducer'
import tab from '../common/tab/tabReducer'
import billingCycles from '../billingCycles/billingCyclesReducer'

const rootReducer = combineReducers({
  dashboard,
  tab,
  billingCycles,
  form
})

export default rootReducer