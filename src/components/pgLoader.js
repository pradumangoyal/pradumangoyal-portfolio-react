import React, { Component } from 'react'
import cliSpinners from 'cli-spinners'
import '../css/loader.css'

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 3
    }
  }
  load = () => {
    this.setState({
      value: (this.state.value + 1) % 8
    })
    setTimeout(this.load, 100)
  }
  componentDidMount () {
    this.load()
  }
  render () {
    return (
      <div className='loader-wrapper center-it'>
        <div className='spinner-container'>
          {cliSpinners.dots11.frames[this.state.value]}
        </div>
        <div className='spinner-text'>Rendering</div>
      </div>
    )
  }
}
