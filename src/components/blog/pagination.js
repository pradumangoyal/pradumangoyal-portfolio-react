import React, { Component } from 'react'
import PageSelector from './pageselector'
import { connect } from 'react-redux'

import '../../css/pagination.css'

class Blogs extends Component {
  constructor (props) {
    const { count, pagination } = props
    super(props)
    this.state = {
      count: count,
      page: pagination
    }
  }
  render () {
    const { count } = this.props
    let i = Math.ceil(count.count / 6)
    let ele = []
    while (i) {
      ele.push(Math.ceil(count.count / 6) - i + 1)
      i--
    }
    return (
      <div className='pagination-wrapper'>
        <PageSelector page='PREV' />
        {ele.map(x => {
          return <PageSelector page={x} key={x} />
        })}
        <PageSelector page='NEXT' />
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
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blogs)
