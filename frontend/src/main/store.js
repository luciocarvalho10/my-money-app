import {applyMiddleware, createStore} from 'redux'
import promise from 'redux-promise'

import reducers from './reducers'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(reducers, devtools)

export default store
