import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/topbar.css'
export default class extends Component {
  render () {
    return (
      <div className='topbar'>
        <NavLink to='/blogs'>Blogs</NavLink>
      </div>
    )
  }
}
