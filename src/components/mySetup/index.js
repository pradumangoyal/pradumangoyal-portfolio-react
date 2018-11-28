import React, { Component } from 'react'

import Loader from '../loader'

import '../../css/my-setup.css'

export default class extends Component {
  render () {
    return (
      <Loader>
        <div className='my-setup-wrapper insert-it'>
          <div>Text</div>
          <div>Image</div>
        </div>
      </Loader>
    )
  }
}
