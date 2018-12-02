import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'

import {getCookie} from '../../utils'
import PGLoader from '../pgLoader'
import SocialLink from '../socialLink'
import Loader from '../loader'
import Rubber from '../rubber'
import { urlContactMe } from '../../urls';

import '../../css/contact-me.css'

const recaptchaRef = React.createRef()

export default class extends Component {

  constructor(props){
    super(props)
    this.state = {
      captcha: false,
      'g-recaptcha-response': '',
      info: {type: '', details: []}
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

  handleCaptcha = (response) => {
    this.setState({
      captcha: true,
      'g-recaptcha-response': response
    })
  }
  handleSubmit = () => {
    if(this.state.captcha){
      let headers = {
        'X-CSRFToken': getCookie('csrftoken')
      }
      let data = {
        name: this.state.name,
        email: this.state.email,
        subject: this.state.email,
        message: this.state.message,
        'g-recaptcha-response': this.state["g-recaptcha-response"]
      }
      axios.post(urlContactMe(), data, {headers: headers})
      .then(res => {
        this.setState({
          name: '',
          email: '',
          subject: '',
          message: '',
          info: {
            type: 'success',
            details: {success: ['Message submitted successfully.',]}
          }
        })
      })
      .catch(err => {
        this.setState({
          info: {
            type: 'error',
            details: err.response.data
          }
        })
      })
  }
  else{
    this.setState({
      info: {
        type: 'error',
        details: {success: ['Please verify the ReCAPTCHA.',]}
      }
    })
  }
    recaptchaRef.current.reset()
  }
  render () {
    return (
      <Loader>
        <div className='insert-it contact-me-wrapper'>
          <div className='contact-me-container'>
            <div className='contact-me-content'>
              <div className='contact-me-content-container'>
                <div>
                  <h2 className='special contact-me-heading'>
                    <Rubber>Contact</Rubber>&nbsp;<Rubber>me</Rubber>
                  </h2>
                  <span className='message'>
                    Have any message for me?
                    {' '}
                    <a href='mailto:goyal.praduman611@gmail.com'>Mail</a>
                    {' '}
                    me or fill the following form
                  </span>

                  <div className='contact-me-input-container'>
                    <input
                      required
                      onChange={this.handleInputChange}
                      className='half-width contact-me-input'
                      name='name'
                      placeholder='Name'
                      autoComplete='off'
                    />

                    <input
                      required
                      onChange={this.handleInputChange}
                      className='half-width contact-me-input'
                      name='email'
                      placeholder='Email'
                      autoComplete='off'
                    />
                  </div>
                  <div className='contact-me-input-container'>
                    <input
                      required
                      onChange={this.handleInputChange}
                      className='full-width contact-me-input'
                      name='subject'
                      placeholder='Subject'
                      autoComplete='off'
                    />
                  </div>
                  <div className='contact-me-input-container'>
                    <textarea
                      required
                      onChange={this.handleInputChange}
                      className='full-width contact-me-textarea'
                      name='message'
                      rows='8'
                      placeholder='Message'
                    />
                  </div>
                </div>
                <div className='contact-me-input-container'>
                  <ReCAPTCHA
                  sitekey="6LcgNH4UAAAAADHxPKh6khE1Uz2lQDVPVZS6xXt9
                  "
                  theme="dark"
                  onChange={this.handleCaptcha}
                  ref={recaptchaRef} 
                  />
                </div>
                <div className={`contact-me-info-container ${this.state.info.type === 'success' && 'successful'} ${this.state.info.type === 'error' && 'errorful'}`}>
                  {this.state.info.details.success && this.state.info.details.success.map(x => {return <li>{x}</li>})}
                  {this.state.info.details.error && <li>{this.state.info.details.error}</li>}
                  {this.state.info.details.name && this.state.info.details.name.map(x => {return <li>Name: {x}</li>})}
                  {this.state.info.details.email && this.state.info.details.email.map(x => {return <li>Email: {x}</li>})}
                  {this.state.info.details.subject && this.state.info.details.subject.map(x => {return <li>Subject: {x}</li>})}
                  {this.state.info.details.message && this.state.info.details.message.map(x => {return <li>Message: {x}</li>})}
                </div>
                <div className='contact-me-button-container'>
                  <button className='contact-me-button' onClick={this.handleSubmit}>SEND</button>
                </div>
                <div className='social-links center-it'>
                  <SocialLink
                    icon='fa-facebook-f'
                    site='fb'
                    link='https://www.facebook.com/praduman.goyal.11'
                  />
                  <SocialLink
                    icon='fa-instagram'
                    site='insta'
                    link='https://www.instagram.com/pradumangoyal/'
                  />
                  <SocialLink
                    icon='fa-linkedin-in'
                    site='linked-in'
                    link='https://www.linkedin.com/in/pradumangoyal'
                  />
                  <SocialLink
                    icon='fa-github'
                    site='github'
                    link='https://github.com/pradumangoyal'
                  />

                </div>
              </div>
            </div>
            <div className='contact-me-map'>
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: 'AIzaSyApKWOGSonTtzjjx9qWcCIrBjDP7YduTIY'
                }}
                defaultCenter={{
                  lat: 29.8627431,
                  lng: 77.8964572
                }}
                defaultZoom={14}
              >

                <PGLoader />
                <img
                  src='http://www.iconarchive.com/download/i57834/icons-land/vista-map-markers/Map-Marker-Marker-Outside-Chartreuse.ico'
                  alt='map-poiner'
                  lat={29.8627431}
                  lng={77.8964572}
                  className='contact-me-map-pointer'
                />
              </GoogleMapReact>
            </div>
          </div>
        </div>
      </Loader>
    )
  }
}
