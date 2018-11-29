import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import projects from './projects.json'

class Work extends Component {
  constructor (props) {
    super(props)
    this.state = {
      work: {}
    }
  }
  componentDidMount () {
    const { match } = this.props
    this.setState({
      work: projects.list.filter(project => project.id === match.params.id)[0]
    })
  }
  render () {
    const { work } = this.state
    return <div className='work-wrapper'>{!work && <Redirect to='/404' />}</div>
  }
}

export default Work
