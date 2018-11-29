import React, { Component } from 'react'

import WorkThumbnail from './workThumbnail'
import '../../css/works.css'
class MyWork extends Component {
  render () {
    return (
      <div className='works-wrapper'>
        <div className='works-container'>
          <WorkThumbnail /><WorkThumbnail /><WorkThumbnail />
          <WorkThumbnail /><WorkThumbnail /><WorkThumbnail />
          <WorkThumbnail /><WorkThumbnail /><WorkThumbnail />
          <WorkThumbnail /><WorkThumbnail /><WorkThumbnail />
        </div>
      </div>
    )
  }
}

export default MyWork
