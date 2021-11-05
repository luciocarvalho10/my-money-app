import { combineReducers } from 'redux'
import dashboard from '../dashboard/dashboardReducer'
import tab from '../common/tab/tabReducer'

const rootReducer = combineReducers({
  dashboard,
  tab
})

export default rootReducer