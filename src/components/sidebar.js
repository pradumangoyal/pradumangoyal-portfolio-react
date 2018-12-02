import React, { Component } from 'react'
import axios from 'axios'

import {urlIsAdmin} from '../urls'
import NavButton from './navButton'
import '../css/sidebar.css'
export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      admin: false
    }
  }

  componentDidMount(){
    axios.get(urlIsAdmin())
    .then(res => {
      this.setState({admin: true})
    })
    .catch(err => {
      this.setState({
        admin: false
      })
    })
  }
  render () {
    return (
      <div className='sidebar'>
        <div className='sidebar-logo center-it'>
          <a href='/'>
            <h1>P</h1>
          </a>
        </div>
        <div className='navigation'>
          <NavButton link='/' text='home' icon='mi-home' />
          <NavButton link='/work/' text='my work' icon='mi-work' />
          <NavButton link='/blogs/' text='blogs' icon='mi-textsms' />
          <NavButton link='/about' text='about me' icon='mi-person' />
          <NavButton link='/my_setup' text='my setup' icon='mi-computer' />
          <NavButton link='/contact' text='contact me' icon='mi-mail' />
          {this.state.admin && <NavButton link='/inbox' text='Inbox' icon='mi-inbox' />}
        </div>
      </div>
    )
  }
}
