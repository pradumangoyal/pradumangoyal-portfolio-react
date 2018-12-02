import React, { Component } from 'react'
import axios from 'axios'

import PGLoader from './pgLoader'
import Loader from './loader'
import Message from './message'
import Rubber from './rubber'
import {urlContactMe} from '../urls'

import '../css/inbox.css'

export default class extends Component {
 constructor(props){
     super(props)
     this.state = {
         loading: true,
         list: []
     }
 }

 componentDidMount = () => {
    axios.get(urlContactMe())
    .then(res => {
      this.setState({
        list: res.data,
        loading: false
      })
    })
  }
  render () {
    return (
      <Loader>
        <div className='inbox-wrapper'>
            <h2 className='special about-me-heading'>
                <Rubber>Messages</Rubber>
            </h2>
        <div className='inbox-container'>
        {this.state.loading ? <PGLoader /> :
            <React.Fragment>
                {this.state.list.slice(0).reverse().map(message => {
                    return <Message message={message} key={message.id}/>
                })}
            </React.Fragment>}
        </div>
        </div>
      </Loader>
    )
  }
}