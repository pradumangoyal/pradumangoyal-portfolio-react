import React from 'react'
import axios from 'axios'

import {urlLogin} from '../urls'
import {getCookie} from '../utils'
import Loader from './loader'
import '../css/login.css'
export default class Login extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            username: "",
            password: ""
        }
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit = () => {
          let headers = {
            'X-CSRFToken': getCookie('csrftoken')
          }
          let data = {
            username: this.state.username,
            password: this.state.password,
          }
          axios.post(urlLogin(), data, {headers: headers})
          .then(res => {console.log('Response', res)})
          .catch(err => {console.log('Error', err.response.data)})
    }

    render(){
        return (
            <Loader>
              <div className='login-wrapper'>
                <div className='login-container'>
                    <span>So, you are here, huh?</span>
                    <div className='login-input-container'>
                        <label>Username</label>
                        <input name='username' className='login-input' onChange={this.handleInputChange}></input>
                    </div>                    
                    <div className='login-input-container'>
                        <label>Password</label>
                        <input name='password' type='password' className='login-input' onChange={this.handleInputChange}></input>
                    </div>                    
                    <div className='login-button-container'>
                        <button className='login-button' onClick={this.handleSubmit}>Log in</button>
                    </div>
                    <div className='login-input-container'></div>
                </div>
              </div>
            </Loader>)
    }
}