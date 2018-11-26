import React, { Component } from 'react'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rubber: false
    }
  }
  setRubbery = () => {
    this.setState({
      rubber: true
    })
  }
  removeRubbery = () => {
    this.setState({
      rubber: false
    })
  }
  handleMouseOver = () => {
    if (!this.state.rubber) {
      this.setRubbery()
      setTimeout(this.removeRubbery, 650)
    }
  }
  render () {
    return (
      <span
        className={
          this.state.rubber
            ? `rubber-text rubber-animated rubber-band`
            : `rubber-text`
        }
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      >
        {this.props.children}
      </span>
    )
  }
}
