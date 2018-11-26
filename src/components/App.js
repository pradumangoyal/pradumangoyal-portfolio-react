import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Sidebar from './sidebar'
import Topobar from './topbar'
import Home from './home/index'
import AboutMe from './aboutMe/index'
import NoMatch from './404'

import '../css/app.css'
class App extends Component {
  render () {
    return (
      <Router>
        <div className='app'>
          <Sidebar />
          <Topobar />
          <div className='main-content-wrapper'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/work' component={Home} />
              <Route path='/about' component={AboutMe} />
              <Route path='/my_setup' component={Home} />
              <Route path='/contact' component={Home} />
              <Route path='/blogs' component={Home} />
              <Route component={NoMatch} />
            </Switch>
          </div>

        </div>
      </Router>
    )
  }
}

export default App
