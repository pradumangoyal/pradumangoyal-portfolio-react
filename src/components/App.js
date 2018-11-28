import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Sidebar from './sidebar'
import Topobar from './topbar'
import Home from './home/index'
import AboutMe from './aboutMe/index'
import MySetup from './mySetup/index'
import ContactMe from './contactMe/index'
import Blogs from './blog/index'
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
            {this.props.problem
              ? <NoMatch />
              : <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/work' component={Home} />
                <Route path='/about' component={AboutMe} />
                <Route path='/my_setup' component={MySetup} />
                <Route path='/contact' component={ContactMe} />
                <Route path='/blogs' component={Blogs} />
                <Route component={NoMatch} />
              </Switch>}
          </div>

        </div>
      </Router>
    )
  }
}

function mapStateToProps (state) {
  return {
    problem: state.problem
  }
}

export default connect(mapStateToProps)(App)
