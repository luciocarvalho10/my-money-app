import React from "react"
import ReactDom from 'react-dom'
import {Provider} from 'react-redux'

import App from "./main/app"
import store from "./main/store"

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)