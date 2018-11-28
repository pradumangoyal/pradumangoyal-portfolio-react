import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changePage, setBlogList } from '../../actons'

import '../../css/pagination.css'

class PageSelector extends Component {
  display (x) {
    switch (x) {
      case 'NEXT':
        return <i className='fas fa-chevron-right' />
      case 'PREV':
        return <i className='fas fa-chevron-left' />
      default:
        return x
    }
  }
  action = () => {
    const { page, count, pagination } = this.props
    switch (page) {
      case 'NEXT':
        if (pagination < Math.ceil(count.count / 6)) {
          this.props.ChangePage(pagination + 1)
          this.props.SetBlogList(pagination + 1)
        }
        break
      case 'PREV':
        if (pagination > 1) {
          this.props.ChangePage(pagination - 1)
          this.props.SetBlogList(pagination - 1)
        }
        break
      default:
        this.props.ChangePage(page)
        this.props.SetBlogList(page - 1)
    }
  }
  handleClick = () => {
    this.action()
  }
  render () {
    const { page, pagination } = this.props
    return (
      <div
        className={`page-selector ${pagination === page && 'page-active'}`}
        onClick={this.handleClick}
      >
        {this.display(page)}
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    pagination: state.pagination,
    count: state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    ChangePage: page => {
      dispatch(changePage(page))
    },
    SetBlogList: page => {
      dispatch(setBlogList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageSelector)
