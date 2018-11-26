import React, { Component } from 'react'
import ReactRotatingText from 'react-rotating-text'

import Loader from '../loader'
import Rubber from '../rubber'

import '../../css/about-me.css'
import '../../css/rubberband.css'

export default class extends Component {
  render () {
    return (
      <Loader>
        <div className='insert-it about-me-wrapper'>G</div>
      </Loader>
    )
  }
}
