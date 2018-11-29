import React, { Component } from 'react'
import NavButton from './navButton'
import SocialLink from './socialLink'
import '../css/sidebar.css'
export default class extends Component {
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
          <NavButton link='/blogs' text='blogs' icon='mi-textsms' />
          <NavButton link='/about' text='about me' icon='mi-person' />
          <NavButton link='/my_setup' text='my setup' icon='mi-computer' />
          <NavButton link='/contact' text='contact me' icon='mi-mail' />
        </div>
      </div>
    )
  }
}
