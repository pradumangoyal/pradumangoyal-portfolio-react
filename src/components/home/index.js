import React, { Component } from 'react'
import ReactRotatingText from 'react-rotating-text'

import Loader from '../loader'
import Rubber from '../rubber'

import '../../css/home.css'
import '../../css/rubberband.css'

export default class extends Component {
  render () {
    return (
      <Loader>
        <div className='home-wrapper insert-it'>
          <div className='home-container'>
            <div className='hi-container'>
              <div className='greet-text'>
                <div>

                  <h1>
                    <Rubber>H</Rubber>
                    <Rubber>i</Rubber>
                    <Rubber>,</Rubber>
                  </h1>
                  <h1>
                    <Rubber>I</Rubber>
                    &nbsp;
                    <Rubber>a</Rubber>
                    <Rubber>m</Rubber>
                    &nbsp;
                    <span className='special'>P</span>
                    <Rubber>r</Rubber>
                    <Rubber>a</Rubber>
                    <Rubber>d</Rubber>
                    <Rubber>u</Rubber>
                    <Rubber>m</Rubber>
                    <Rubber>a</Rubber>
                    <Rubber>n</Rubber>
                    <Rubber>.</Rubber>
                  </h1>
                  <h1>
                    <Rubber>I</Rubber>
                    &nbsp;
                    <Rubber>a</Rubber>
                    <Rubber>m</Rubber>
                    &nbsp;
                    <span className='rotating-text'>
                      <ReactRotatingText
                        items={[
                          'a Frontend Developer. ',
                          'a Backend Developer. ',
                          'a Philomath. ',
                          'an Easter egg artist. '
                        ]}
                      />
                    </span>
                  </h1>
                  <h1 className='home-width-referer'>
                    I am a Frontend Developer .|
                  </h1>
                </div>
              </div>
            </div>
            <div className='home-photo-container'>
              <img src='https://www.lexellweb.com/wp-content/uploads/2018/08/Planet-Uke-Profile-Image-for-Sidebar-Circular.png' />
            </div>
          </div>
        </div>
      </Loader>
    )
  }
}
