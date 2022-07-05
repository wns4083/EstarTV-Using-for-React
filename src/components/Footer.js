import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube, faTwitter, faInstagram, faTwitch} from '@fortawesome/free-brands-svg-icons';

import React from 'react'
import './Footer.css'
function Footer() {
    
  return (
    <div className='footerContainer'>
        <dl className='footerWrap'>
            <dt>(주)랩추종윤</dt>
            <dt>Email:</dt>
            <dd>wns1395@naver.com</dd>
            <dt>TEL:</dt>
            <dd>0101000100</dd>
            <address>
             서울특별시 마포구 창천2로 1702-2 마곡빌딩 3층
            </address>
            <dt>Creater</dt>
            <dd>LJH</dd>    
        </dl>
        <dl className="iconSNS">
            <a href='https://www.youtube.com/이스타tv'
               target="_blank"
               rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faYoutube}
                
                />
            </a>
            <a href='https://www.instagram.com/'
               target="_blank"
               rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faInstagram}
                
                />
            </a>
            <a href='https://www.twitch.tv'
               target="_blank"
               rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faTwitch}
                
                />
            </a>
            <a href='https://www.twitter.com'
               target="_blank"
               rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={faTwitter}
                
                />
            </a>
            
        </dl>
    </div>
  )
}

export default Footer;