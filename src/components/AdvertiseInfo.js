import React from 'react'
import './AdvertiseInfo.css';


function AdvertiseInfo() {
    const InfomationAdvertisement =[
        {
            number: 1,
            title: '핀다',
            content: '세상에 없던 대출 비교 플랫폼',
            src: 'images/advertise/ad1.jpg',
            links: 'https://www.finda.co.kr/'
        },
        {
            number: 2,
            title: '버드와이저',
            content: 'King Of the Beer',
            src: 'images/advertise/ad2.jpg',
            links: 'https://www.finda.co.kr/'
        },
        {
            number: 3,
            title: '런던 방앗간',
            content: '축구공은 둥굴고, 씨앗 또한 둥글다.',
            src: 'images/advertise/ad3.jpg',
            links: 'https://www.instagram.com/london_grain_company_official/?hl=ko'
        },
        {
            number: 4,
            title: 'Malden',
            content: 'Classic is Best',
            src: 'images/advertise/ad4.jpg',
            links: 'https://www.malden.co.kr/'
        },
        {
            number: 5, 
            title: 'THERAGUN',
            content: '사랑을 향해 질러라, 그게 마사지건이라 할지라도',
            src: 'images/advertise/ad5.jpg',
            links: 'https://www.therabody.com/us/en-us/home'
        }
    ]
  return (
    <div className='AdvertisementsList'>
        <div className='AdvertiseTittle'>
            <h2 className='titles'>
                이스타TV와 함께하는 광고!
            </h2>
        </div>
        
            <ul className='adWrrap'>
                {InfomationAdvertisement.map((item, idx)=>{
                    return(
                        <li className='adList' key={idx}>
                            <div className='listTitle'>
                                {item['title']}
                            </div>
                            <div className='listContent'>
                                {item['content']}
                            </div>
                            <span className='bg'>
                                <img src={item['src']} alt="ad" title='ad'/>
                            </span>
                            <a className='externalLinks'
                               href={item['links']}
                               target="_blank"
                               rel="noopener noreferrer"
                            >
                                바로가기
                            </a>
                        </li>
                    )
                })}
            </ul>
    </div>
  )
}

export default AdvertiseInfo