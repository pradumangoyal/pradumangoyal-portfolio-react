import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import 'material-icons/css//material-icons.min.css'
import 'material-icons/iconfont/material-icons.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

import rootReducers from './reducers'
import './css/inline.css'

const store = createStore(rootReducers, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
