import React, { Component } from 'react'
import { connect } from 'react-redux'

import { setCount, setActiveBlog, setBlogList, changePage } from '../../actons'
import BlogThumbnail from './blogThumbnail'
import Pagination from './pagination'
import Loader from '../loader'

import '../../css/blogs.css'
import PGLoader from '../pgLoader'

class Blogs extends Component {
  constructor (props) {
    const { count, blogs, pagination } = props
    super(props)
    this.state = {
      count: count,
      blogs: blogs,
      page: pagination
    }
  }
  componentDidMount () {
    const { pagination } = this.props
    this.props.SetCount()
    this.props.SetBlogList(pagination)
  }
  render () {
    const { count, blogs } = this.props
    return (
      <Loader>
        <div className='blogs-wrapper'>
          <div className='blogs-container'>
            {count.loaded
              ? <React.Fragment>
                <div className='blogs-list-container'>
                  {blogs.loaded
                      ? blogs.list.map(blog => {
                        return <BlogThumbnail key={blog.ID} blog={blog} />
                      })
                      : <div className='blog-loading'><PGLoader /></div>}
                </div>
                <Pagination />
              </React.Fragment>
              : <PGLoader />}
          </div>
        </div>
      </Loader>
    )
  }
}

function mapStateToProps (state) {
  return {
    pagination: state.pagination,
    blogs: state.blogs,
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    SetCount: () => {
      dispatch(setCount())
    },
    SetBlogList: page => {
      dispatch(setBlogList(page))
    },
    ChangePage: page => {
      dispatch(changePage(page))
    },
    SetActiveBlog: id => {
      dispatch(setActiveBlog(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)
