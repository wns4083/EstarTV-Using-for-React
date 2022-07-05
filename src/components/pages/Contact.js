import React from 'react'

import FormCard from '../FormCard'
import CardsItems from '../CardsItems'

function Contact() {
  return (
    <div className='contactContainer' 
         style={{
          display:'flex', 
          justifyContent:'center', 
          alignItems:'center', 
          height:'auto', 
          width:'1920px',
          margin:'300px auto', 
          position:'relative',
          paddingLeft:'20px',
          paddingRight:'20px'
          }}>
      <div className='cardListUp' 
           style={{
           width:'80%',
           display:'flex', 
           justifyContent:'center', 
           alignItems:'center', 
           boxSizing:'border-box',
           
           }}>
            <CardsItems srcs="images/contact/estartv1.jpg"
                        alts="imagsesAdvertise"
                        titles="이스타TV"
                        text="일 평균 40만 이상이 시청하는 컨탠츠"
            />
            <CardsItems srcs="images/contact/escape.jpg"
                        alts="imagsesAdvertise"
                        titles="식장탈출Seriese"
                        text="최강의 노출시간"
            />
            <CardsItems srcs="images/contact/hidden.jpg"
                        alts="imagsesAdvertise"
                        titles="히든풋볼"
                        text="아저씨들의 효과적 매출 증대"
            />
            <CardsItems srcs="images/contact/joo.jpg"
                        alts="imagsesAdvertise"
                        titles="주책남들"
                        text="책임지는 남자들!"
            />
            <CardsItems srcs="images/contact/solo.jpg"
                        alts="imagsesAdvertise"
                        titles="히든솔로"
                        text="Young한 시청자들이 모인 곳!"
            />
      </div>
      
      <FormCard/>
      
    </div>
  )
}

export default Contact