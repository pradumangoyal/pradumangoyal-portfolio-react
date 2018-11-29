import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Works from './works'
import Work from './work'

class MyWork extends Component {
  render () {
    return (
      <React.Fragment>
        <Route exact path='/work' component={Works} />
        <Route exact path='/work/:id' component={Work} />
      </React.Fragment>
    )
  }
}

export default MyWork
