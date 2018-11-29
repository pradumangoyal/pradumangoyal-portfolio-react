import React, { Component } from 'react'

import projects from './projects.json'
import WorkThumbnail from './workThumbnail'
import '../../css/works.css'
class MyWork extends Component {
  render () {
    console.log(projects.list)
    return (
      <div className='works-wrapper'>
        <div className='works-container'>
          {projects.list.map((project, index) => {
            return <WorkThumbnail project={project} key={index} />
          })}
        </div>
      </div>
    )
  }
}

export default MyWork
