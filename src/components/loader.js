import React, { Component } from 'react'
import { setTimeout } from 'core-js'

import PGLoader from './pgLoader'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  loadPage = () => {
    this.setState({
      isLoading: false
    })
  }
  componentDidMount () {
    this.setState({
      isLoading: true
    })
    setTimeout(this.loadPage, 2000)
  }
  render () {
    return this.state.isLoading ? <PGLoader /> : this.props.children
  }
}
