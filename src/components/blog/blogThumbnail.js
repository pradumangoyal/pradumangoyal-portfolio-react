import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'

import '../../css/blog-thumbnail.css'

class BlogThumbnail extends Component {
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
    const { blog } = this.props
    return (
      <div className='blog-thumbnail-container'>
        <Link
          to={`/blogs/${blog.ID}`}
          as='div'
          className='blog-thumbnail'
          onMouseOver={this.handleMouseOver}
          onMouseLeave={this.handleMouseLeave}
        >
          <div
            className='blog-image'
            style={
              blog.post_thumbnail
                ? { background: `url('${blog.post_thumbnail.URL}')` }
                : {
                  background: `url('https://www.sctech.edu/futurestudents/wp-content/plugins/ajax-search-pro/img/default.jpg')`
                }
            }
          >
            <div className='blog-thumbnail-tags-wrapper'>
              {Object.keys(blog.tags).slice(0, 3).map(tag => {
                return <div className='blog-thumbnail-tag'>{tag}</div>
              })}
            </div>
            <div
              className={`${this.state.hover ? 'blog-thumbnail-text-hover' : 'blog-thumbnail-text'}`}
            >
              <div className='blog-thumbnail-title-container'>
                <div className='blog-thumbnail-title'>{blog.title}</div>
                <div className='blog-thumbanil-time'>
                  {moment(blog.date).format('DD-MM-YYYY')}
                </div>
              </div>
              <div
                className={`${this.state.hover ? 'blog-thumbnail-desc-container-hover' : 'blog-thumbnail-desc-container'}`}
                dangerouslySetInnerHTML={{ __html: blog.excerpt }}
              />
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogThumbnail)
