import { combineReducers } from 'redux'
import {reducer as form} from 'redux-form'
import { reducer as toastr } from 'react-redux-toastr'

import dashboard from '../dashboard/dashboardReducer'
import tab from '../common/tab/tabReducer'
import billingCycles from '../billingCycles/billingCyclesReducer'
import auth from '../auth/authReducer'

const rootReducer = combineReducers({
  dashboard,
  tab,
  billingCycles,
  form,
  toastr,
  auth
})

export default rootReducer