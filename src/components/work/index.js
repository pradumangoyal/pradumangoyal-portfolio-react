import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Works from './works'

class MyWork extends Component {
  render () {
    return (
      <React.Fragment>
        <Route exact path='/work' component={Works} />
        {/* <Route exact path='/blogs/:id' component={Blog} /> */}
      </React.Fragment>
    )
  }
}

export default MyWork
