import React, { Component } from 'react'
import axios from 'axios'
import moment from 'moment'

import {urlContactMeId} from '../urls'
import {getCookie} from '../utils'

export default class extends Component {
  constructor(props){
      super(props)
      this.state = {
          date: '',
          name: '',
          subject: '',
          email: '',
          client_ip: '',
          message: '',
          id: '',
          is_read: false,
          visible: false
      }
  }
  componentDidMount = () => {
      this.setState(
          this.props.message
      )
  }
  handleVisibility = () => {
      this.setState({
          visible: !this.state.visible
      })
  }
  handleRead = () => {
    let headers = {
        'X-CSRFToken': getCookie('csrftoken')
        }
        let data = {
            is_read: !this.state.is_read
        }
        axios.patch(urlContactMeId(this.state.id), data, {headers: headers})
        .then(res => {
            this.setState(res.data)
        })
        .catch(err => {
        })
    this.setState()
  }
  render () {
    return (
        <div className={`message-wrapper ${this.state.is_read && 'message-readed'}`}>
          <div className='message-top'>
              <div><span className='message-heading'>Date:</span> {moment(this.state.created).format('DD-MM-YY')}</div>
              <div className='message-heading-view' onClick={this.handleVisibility}>{this.state.visible ? 'Hide' : 'View'}</div>
          </div>        
          <div><span className='message-heading'>Name:</span> {this.state.name}</div>
          <div className='message-top'>
          <div><span className='message-heading'>Subject:</span> {this.state.subject}</div>
            <div className='message-heading-view' onClick={this.handleRead}>{this.state.is_read ? 'Mark Unread' : 'Mark Read'}</div>
          </div>      
          {this.state.visible &&
          <React.Fragment>
          <div>
              <span className='message-heading'>Message:</span>
              <div>{this.state.message}</div>
          </div>
          <div>
              <span className='message-heading'>Email:</span> 
              <span> </span>
              <a href={`mailto:${this.state.email}`}>
              {this.state.email}
              </a>
          </div>
          <div><span className='message-heading'>IP:</span> {this.state.client_ip}</div>      
          </React.Fragment>
          }
        </div>
    )
  }
}