import React, { Component } from 'react'

import Loader from '../loader'
import Rubber from '../rubber'

import '../../css/about-me.css'
import '../../css/rubberband.css'

export default class extends Component {
  render () {
    return (
      <Loader>
        <div className='insert-it about-me-wrapper'>
          <div className='about-me-container'>

            <div className='about-me-content'>
              <h2 className='special about-me-heading'>
                <Rubber>About</Rubber>&nbsp;<Rubber>me</Rubber>
              </h2>
              <div className='about-me-desc'>
                I am a sophomore pursuing
                {' '}
                <span>Applied Mathematics</span>
                {' '}
                at <span>Indian Institute of Technology, Roorkee</span>.
                {' '}
                While pursuing the same I developed an interest in
                {' '}
                <span>Pure Mathematics</span>
                {' '}
                courses.
                {' '}
                I am always ready to discover and implement ideas along with learning new tech stack.
                {' '}
                Deeply passionate about the
                {' '}
                <span>Product Cycle</span>
                {' '}
                of a web application from formulating its idea to giving it a final shape.
                {' '}
                I believe in working hard and smart in my own way.
                {' '}
                I always quote that "
                <span>If you watse Time, Time will waste you</span>
                ."
                {' '}
                My hobbies include listening
                {' '}
                <span>Punjabi songs</span>
                ,
                {' '}
                <span>Table tennis</span>
                ,
                {' '}
                <span>
                  memes
                </span>.
                <br />
                <button className='about-me-resume'>
                  <i class='fas fa-arrow-down' />Resume
                </button>
                <br />Mail me at
                {' '}
                <a href='mailto:goyal.praduman611@gmail.com'>
                  goyal.praduman611@gmail.com
                </a>
              </div>
            </div>

            <div className='skills'>
              <div>
                <h2 className='special about-me-heading'>
                  <Rubber>Skills</Rubber>
                </h2>
                <div>
                  <span className='skills-heading skills-col'>
                    Languages(Communication)
                  </span>
                  <span className='skills-desc skills-col'>
                    <span className='skills-desc-element'>Hindi(SRW)</span>
                    ,
                    <span className='skills-desc-element'>English(SRW)</span>
                    ,
                    <span className='skills-desc-element'>Punjabi(RW)</span>
                  </span>
                  <span className='skills-heading skills-col'>
                    Languages(Code)
                  </span>
                  <span className='skills-desc skills-col'>
                    <span className='skills-desc-element'>C++</span>,
                    <span className='skills-desc-element'>HTML</span>,
                    <span className='skills-desc-element'>CSS</span>,
                    <span className='skills-desc-element'>JavaScript</span>,
                    <span className='skills-desc-element'>Python</span>,
                    <span className='skills-desc-element'>PHP</span>
                  </span>
                  <span className='skills-heading skills-col'>
                    Frontend
                  </span>
                  <span className='skills-desc skills-col'>
                    <span className='skills-desc-element'>React</span>,
                    <span className='skills-desc-element'>React-Redux</span>,
                    <span className='skills-desc-element'>SCSS</span>,
                    <span className='skills-desc-element'>SemanticUI</span>,
                    <span className='skills-desc-element'>jQuery</span>,
                    <span className='skills-desc-element'>Sockets</span>
                  </span>
                  <span className='skills-heading skills-col'>
                    Backend
                  </span>
                  <span className='skills-desc skills-col'>
                    <span className='skills-desc-element'>Django</span>,
                    <span className='skills-desc-element'>DjangoRest</span>,
                    <span className='skills-desc-element'>DjangoChannels</span>,
                    <span className='skills-desc-element'>MySQL</span>,
                    <span className='skills-desc-element'>PHP</span>
                  </span>
                  <span className='skills-heading skills-col'>
                    Utilities
                  </span>
                  <span className='skills-desc skills-col'>
                    <span className='skills-desc-element'>Git</span>,
                    <span className='skills-desc-element'>Vim</span>,
                    <span className='skills-desc-element'>VSCode</span>,
                    <span className='skills-desc-element'>WebStorm</span>,
                    <span className='skills-desc-element'>Visual Studio</span>,
                    <span className='skills-desc-element'>
                      Linux shell utilities
                    </span>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </Loader>
    )
  }
}
