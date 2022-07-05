import React,{useState} from 'react'
import Slider from 'react-slick'
import CardsItems from './CardsItems';
import './ContactSliders.css';

import img from '../images/Thumnails1.jpg'
import img2 from '../images/Thumnails2.jpg'
import img3 from '../images/Thumnails3.jpg'

function ContactSliders() {
    const setting = {
        dots: true,
        Infinity: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        shildesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        beforeChange: (current, next)=>setSlideIndex(next),
        centerMode: true
    }
    const [sliderIndex, setSlideIndex]= useState(0);
    const images = [img, img2, img3];
  return (
    <div className='slideWrp'>
        <Slider {...setting}>
            {
                images.map((img, index)=>{
                    <div className={index===sliderIndex ? 'slide slide-active' : 'slide'} key={index}>
                        <img src={img} alt=""/>
                    </div>
                })
            }
        </Slider>
    </div>
  )
}

export default ContactSliders