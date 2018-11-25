import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import '../css/nav-button.css'
export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      mouseOver: false
    }
  }
  handleMouseOver = () => {
    this.setState({
      mouseOver: true
    })
  }
  handleMouseLeave = () => {
    this.setState({
      mouseOver: false
    })
  }
  render () {
    return (
      <NavLink
        exact={this.props.link === '/'}
        to={this.props.link}
        className='nav-button center-it'
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.state.mouseOver
          ? <span className='nav-text'>{this.props.text}</span>
          : <span className={`mi ${this.props.icon} nav-icon`} />}
      </NavLink>
    )
  }
}
