import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import {urlEnsureCSRF, urlIsAdmin} from '../urls'
import Sidebar from './sidebar'
import Home from './home/index'
import AboutMe from './aboutMe/index'
import MySetup from './mySetup/index'
import ContactMe from './contactMe/index'
import Blogs from './blog/index'
import Work from './work/index'
import NoMatch from './404'

import '../css/app.css'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      admin: false
    }
  }

  componentDidMount(){
    axios.get(urlEnsureCSRF())
    axios.get(urlIsAdmin())
    .then(res => {
      this.setState({admin: true})
    })
    .catch(err => {
      this.setState({
        admin: false
      })
    })
  }
  render () {
    return (
      <Router>
        <div className='app'>
          <Sidebar />
          <div className='main-content-wrapper'>
            {this.props.problem
              ? <NoMatch />
              : <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/work' component={Work} />
                <Route path='/about' component={AboutMe} />
                <Route path='/my_setup' component={MySetup} />
                <Route path='/contact' component={ContactMe} />
                <Route path='/blogs' component={Blogs} />
                {this.state.admin && <Route path='/inbox' component={MySetup} />}
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
