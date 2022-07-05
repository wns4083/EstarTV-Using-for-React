import React from 'react'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './ImageSlider.css'
function ImageSlider(props) {
    let setting = {
        dots: true,
        Infinity: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        shildesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
    }
  return (
    <section className='slideWrraper'>
    <Slider {...setting}>
        <div className='imageWrap'>
            <div className='imgItems'>
                <div className='imgItem'>
                    <img src={process.env.PUBLIC_URL +'/images/slide/slide1.jpg'}
                         alt='slideOne'
                         className='sliderImg'
                    />
                </div>
                <div className='details'>
                    <p><span className='imgTitle'>이스타TV</span>대한민국 최고 축구예능 채널!</p>
                </div>
            </div>
        </div>
        <div className='imageWrap'>
            <div className='imgItems'>
                <div className='imgItem'>
                    <img src={process.env.PUBLIC_URL +'/images/slide/slide2.jpg'}
                         alt='slideTwo'
                         className='sliderImg'
                    />
                </div>
                <div className='details'>
                    <p><span className='imgTitle'>히든풋볼</span>진짜들의 이유 있는 선택! Deep하면서도 Light한 축구 이야기!</p>
                </div>
            </div>
        </div>
        <div className='imageWrap'>
            <div className='imgItems'>
                <div className='imgItem'>
                    <img src={process.env.PUBLIC_URL +'/images/slide/slide3.jpg'}
                         alt='slideThree'
                         className='sliderImg'
                    />
                </div>
                <div className='details'>
                    <p><span className='imgTitle'>식장탈출Seriese</span>어른들의 솔직한 이야기!</p>
                </div>
            </div>
        </div>
        <div className='imageWrap'>
            <div className='imgItems'>
                <div className='imgItem'>
                    <img src={process.env.PUBLIC_URL +'/images/slide/slide4.jpg'}
                             alt='slideFive'
                             className='sliderImg'
                    />
                </div>
                <div className='details'>
                    <p><span className='imgTitle'>히든솔로</span>축구보다 어려운 연애! 히든솔로와 함께 풀어가보죠!</p>
                </div>
            </div>
        </div>
        <div className='imageWrap'>
            <div className='imgItems'>
                <div className='imgItem'>
                    <img src={process.env.PUBLIC_URL +'/images/slide/slide5.jpg'}
                             alt='slideFive'
                             className='sliderImg'
                    />
                </div>
                <div className='details'>
                    <p><span className='imgTitle'>주책남들</span>안에서 새는 바가지, 밖에서도 샌다?! 아저씨들의 유쾌한 반란!</p>
                </div>
            </div>
        </div>
    </Slider>
    </section>
  )
}

export default ImageSlider