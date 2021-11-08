import { combineReducers } from 'redux'
import dashboard from '../dashboard/dashboardReducer'
import tab from '../common/tab/tabReducer'
import billingCycles from '../billingCycles/billingCyclesReducer'

const rootReducer = combineReducers({
  dashboard,
  tab,
  billingCycles
})

export default rootReducer