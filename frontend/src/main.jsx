import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import './assets/styles/main.scss'
import RootCmp from './RootCmp'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // <Provider store={store}>
  <Router>
    <RootCmp />
  </Router>
  // </Provider>
)
