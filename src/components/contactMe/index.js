import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import PGLoader from '../pgLoader'
import SocialLink from '../socialLink'
import Loader from '../loader'
import Rubber from '../rubber'

import '../../css/contact-me.css'

export default class extends Component {
  render () {
    return (
      <Loader>
        <div className='insert-it contact-me-wrapper'>
          <div className='contact-me-container'>

            <div className='contact-me-content'>
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
                    className='half-width contact-me-input'
                    name='name'
                    placeholder='Name'
                    autoComplete='off'
                  />

                  <input
                    className='half-width contact-me-input'
                    name='email'
                    placeholder='Email'
                    autoComplete='off'
                  />
                </div>
                <div className='contact-me-input-container'>
                  <input
                    className='full-width contact-me-input'
                    name='subject'
                    placeholder='Subject'
                    autoComplete='off'
                  />
                </div>
                <div className='contact-me-input-container'>
                  <textarea
                    className='full-width contact-me-textarea'
                    name='message'
                    rows='8'
                    placeholder='Message'
                  />
                </div>
              </div>
              <div className='contact-me-button-container'>
                <button className='contact-me-button'>SEND</button>
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
