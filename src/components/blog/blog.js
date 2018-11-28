import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setActiveBlog } from '../../actons'

import '../../css/blog.css'
import PGLoader from '../pgLoader'
import moment from 'moment'

let radiantColor = [
  '#0071db',
  'rgb(173, 108, 198)',
  'rgb(255, 102, 124)',
  'rgb(102, 187, 106)',
  '#ff4946',
  'rgb(252, 192, 46)',
  'rgb(96, 155, 247)'
]
class Blog extends Component {
  componentDidMount () {
    this.props.SetActiveBlog(this.props.match.params.id)
  }
  render () {
    const { activeBlog } = this.props
    return (
      <div className='blog-wrapper'>
        {activeBlog.loaded
          ? <div className='blog-container '>
            <div
              className='blog-header '
              style={
                  activeBlog.blog.post_thumbnail
                    ? {
                      background: `url('${activeBlog.blog.post_thumbnail.URL}')`
                    }
                    : {}
                }
              >
              <div className='blog-title insert-blog'>
                <div>
                  {activeBlog.blog.title}
                  <span className='blog-author'>
                    {' '}- {activeBlog.blog.author.name}
                  </span>
                </div>
                <div className='blog-date'>
                  {moment(activeBlog.blog.date).format('DD-MM-YYYY')}
                </div>
              </div>
            </div> <div className='blog-tags-wrapper'>
              {Object.keys(activeBlog.blog.tags).map((tag, index) => {
                return (
                  <div
                    className='blog-tag insert-blog'
                    style={{
                      background: `${radiantColor[index % radiantColor.length]}`
                    }}
                    >
                    {tag}
                  </div>
                )
              })}
            </div>
            <div
              className='blog-content-container insert-blog'
              dangerouslySetInnerHTML={{ __html: activeBlog.blog.content }}
              />
          </div>
          : <PGLoader />}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    activeBlog: state.activeBlog
  }
}

const mapDispatchToProps = dispatch => {
  return {
    SetActiveBlog: id => {
      dispatch(setActiveBlog(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog)
