import React, { Component } from 'react'
import '../css/social-link.css'

export default class extends Component {
  render () {
    return (
      <a
        href={this.props.link}
        className={`social-link center-it  ${this.props.site}`}
      >
        <i class={`fab ${this.props.icon}`} />
      </a>
    )
  }
}
