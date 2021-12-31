import React from "react"
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'

import Routes from "./main/Routes"
import store from "./main/store"

ReactDom.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('app')
)