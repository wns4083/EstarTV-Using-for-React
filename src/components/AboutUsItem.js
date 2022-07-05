import React, { useEffect } from 'react'
import Aos from "aos";
import '../aos.css';
import './AboutUsItem.css'

import AboutInfomation from './AboutInfomation';
function AboutUsItem() {
    
  
  useEffect(()=>{
    Aos.init({
      duration: 2000,
      delay:1000,
      disable: false // Phon, tablet, mobile
    })
  })
  return (
    <div className='aboutUsContainer'>
        <span className='photogaphyWrrap'
              style={{display:'block', opacity:'0.1', fontFamily:'Black Han Sans'}} 
             data-aos="zoom-in-up"
             data-aos-offset="100"
             data-aos-once="false"
             data-aos-delay="0"
            >
          <h2>Korea Best Football Chanel Korea Best Football Chanel</h2>
          <hr/>
          <p>Fun &amp; Joy &amp; Light Knowledge. Enjoy Light Content Fun &amp; Joy &amp; Light Knowledge. Enjoy Light Content</p>
          <hr />
          <h2>당신의 <span className='wordColor'>하루</span>를 함께합니다 당신의 <span className='wordColor'>하루</span>를 함께합니다</h2>
          <hr />
        </span>
        <section className='aboutUs'>
                <AboutInfomation 
                                 data-aos="fade-up"
                                 data-aos-offset="300"
                                 data-aos-duration="300"
                                 data-aos-delay="0" 
                />
        </section>
        <section className='whatEstartv'>
          <div className='textEstar'
               data-aos="fade-up"
               data-aos-duration="5000"
               data-aos-offset="500"
          >
                <h2>축구가 인생에 전부가 아닌 사람들의 방송!</h2>
                <p>웰빙시대에 적합한 가벼운 TALK!</p>
                <p>무료한 하루에 이스타TV로 흥미를 추가하세요!</p>
          </div>
          <div className='contentsAboutInfoA'
               data-aos="fade-right"
               data-aos-duration="5000"
               data-aos-offset="200" 
          >
              <figure className='cardItemsA' id='itemA'>
                  <img src={process.env.PUBLIC_URL +'/images/aboutUs/contents1.png'}
                     alt='contentInfo'
                     />
                  <figcaption className='cardItemsAInfo'>
                    <h2>구독자 50만이 함께 즐기는 CONTNETS</h2>
                  </figcaption>
              </figure>
          </div>
          <div className='contentsAboutInfoB'
               data-aos="fade-left"
               data-aos-offset="200"
               data-aos-duration="5000"
          >
                <figure className='cardItemsB'>
                  <img src={process.env.PUBLIC_URL +'/images/aboutUs/contents1.png'}
                     alt='contentInfo'
                     />
                  <figcaption className='cardItemsBInfo'>
                    <h2>총 조회수 8억 뷰가 보장하는 재미!</h2>
                  </figcaption>
              </figure>
          </div>
        </section>
    </div>
  )
}

export default AboutUsItem