import { combineReducers } from 'redux'
import dashboard from '../dashboard/dashboardReducer'
import tab from '../common/tab/tabReducer'
import billingCycle from '../billingCycles/billingCyclesReducer'

const rootReducer = combineReducers({
  dashboard,
  tab,
  billingCycle
})

export default rootReducer