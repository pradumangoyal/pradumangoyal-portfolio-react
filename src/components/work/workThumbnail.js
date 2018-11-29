import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../css/work-thumbnail.css'

let radiantColor = [
  '#0071db',
  'rgb(173, 108, 198)',
  'rgb(255, 102, 124)',
  'rgb(102, 187, 106)',
  '#ff4946',
  'rgb(252, 192, 46)',
  'rgb(96, 155, 247)'
]
class MyWork extends Component {
  constructor (props) {
    super(props)
    this.state = {
      hover: false
    }
  }
  handleMouseLeave = () => {
    this.setState({
      hover: false
    })
  }
  handleMouseOver = () => {
    this.setState({
      hover: true
    })
  }
  render () {
    const { project } = this.props
    return (
      <Link
        to={`${project.id}`}
        as='div'
        className='work-thumbnail'
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className='title-bar'>
          <div className='title-button red-button' />
          <div className='title-button yellow-button' />
          <div className='title-button green-button' />
          <div className='title'>{project.name}</div>
        </div>
        <div
          className='work-thumbnail-content'
          style={
            project.thumbnail
              ? {
                background: `url('${project.thumbnail}')`
              }
              : {}
          }
        >
          <div
            className={`work-thumbnail-tags ${this.state.hover && 'work-thumbnail-tags-hover'}`}
          >
            {project.stack.map((tag, index) => {
              return (
                <div
                  key={index}
                  className='work-thumbnail-tag'
                  style={{
                    background: `${radiantColor[index % radiantColor.length]}`
                  }}
                >
                  {tag}
                </div>
              )
            })}
          </div>
          {!project.thumbnail &&
            <div
              className='project-title'
              style={{
                background: `${radiantColor[radiantColor.length - project.id % radiantColor.length]}`
              }}
            >
              {project.name}
            </div>}
        </div>
      </Link>
    )
  }
}

export default MyWork
