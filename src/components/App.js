import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Sidebar from './sidebar'
import Topobar from './topbar'

import '../css/app.css'
class App extends Component {
  render () {
    return (
      <Router>
        <div className='app'>
          <Sidebar />
          <Topobar />
        </div>
      </Router>
    )
  }
}

export default App
