import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Blogs from './blogs'
import Blog from './blog'
class BlogRedirect extends Component {
  render () {
    return (
      <React.Fragment>
        <Route exact path='/blogs' component={Blogs} />
        <Route exact path='/blogs/:id' component={Blog} />
      </React.Fragment>
    )
  }
}

export default BlogRedirect
