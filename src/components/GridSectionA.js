import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faYoutube} from '@fortawesome/free-brands-svg-icons'

import './GridSectionA.css'


function GridSectionA() {
  return (
    <section className='ContentTitleContainer'>
        <div className='subject1'>
        <h2>WHO WE ARE?</h2>
        <h2>WHO WE ARE?</h2>
        </div>
        <div className='gridContainer'>
            <div className='sub1'>
              <figure className='subFrames'>
                <img src={process.env.PUBLIC_URL +'/images/gridSection/gridSection1.jpg'}
                     alt='contentAtypeImg1'
                     className='contentAtypeImg1'/>
                  <figcaption className='subText'>
                    <h2>이스타TV</h2>
                    <p>대한민국 최고 축구예능 채널</p>
                    <a href='https://www.youtube.com/이스타tv'
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                  </figcaption>
              </figure>
            </div>
            <div className='sub2'>
              <figure className='subFrames'>
                <img src={process.env.PUBLIC_URL +'/images/gridSection/gridSection2.jpg'}
                     alt='contentAtypeImg2'
                     className='contentAtypeImg2'/>
                  <figcaption className='subText'>
                    <h2>히든풋볼</h2>
                    <p>진짜들의 이유 있는 선택! Deep하면서도 Light한 축구 이야기!</p>
                    <a href='https://www.youtube.com/이스타tv'
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                  </figcaption>
              </figure>
            </div>
            <div className='sub3'>
              <figure className='subFrames'>
                <img src={process.env.PUBLIC_URL +'/images/gridSection/gridSection3.jpg'}
                     alt='contentAtypeImg3'
                     className='contentAtypeImg3'/>
                  <figcaption className='subText'>
                    <h2>식장탈출Seriese</h2>
                    <p>어른들의 솔직한 이야기!</p>
                    <a href='https://www.youtube.com/이스타tv'
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                  </figcaption>
              </figure>
            </div>
            <div className='sub4'>
              <figure className='subFrames'>
                <img src={process.env.PUBLIC_URL +'/images/gridSection/gridSection4.jpg'}
                     alt='contentAtypeImg4'
                     className='contentAtypeImg4'/>
                  <figcaption className='subText'>
                    <h2>히든솔로</h2>
                    <p>축구보다 어려운 연애! 히든솔로와 함께 풀어가보죠!</p>
                    <a href='https://www.youtube.com/이스타tv'
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                  </figcaption>
              </figure>
            </div>
            <div className='sub5'>
              <figure className='subFrames'>
                <img src={process.env.PUBLIC_URL +'/images/gridSection/gridSection5.jpg'}
                     alt='contentAtypeImg5'
                     className='contentAtypeImg5'/>
                  <figcaption className='subText'>
                    <h2>주책남들</h2>
                    <p>안에서 새는 바가지, 밖에서도 샌다?! 아저씨들의 유쾌한 반란!</p>
                    <a href='https://www.youtube.com/이스타tv'
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                  </figcaption>
              </figure>
            </div>
            <div className='sub6'>
              <figure className='subFrames'>
                <img src={process.env.PUBLIC_URL +'/images/gridSection/gridSection6.jpg'}
                     alt='contentAtypeImg5'
                     className='contentAtypeImg5'/>
                  <figcaption className='subText'>
                    <h2>이스타TV PREMIUME</h2>
                    <p>오직 PREMIUME에서 만날 수 있는 CONTENTS</p>
                    <a href='https://www.youtube.com/이스타tv'
                       target="_blank"
                       rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faYoutube}/>
                    </a>
                  </figcaption>
              </figure>
            </div>
        </div>
    </section>
  )
}

export default GridSectionA