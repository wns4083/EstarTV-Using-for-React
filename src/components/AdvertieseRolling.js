import React, {useEffect, useState, useRef} from 'react'

function AdvertieseRolling() {
    
    const [idx, setIdx] =useState(0);
    const idxRef = useRef(0);
    const InfomationAdvertisement =[
        {
            number: 1,
            title: '상계동 떡볶이',
            content: '남녀노소 모두가 즐기는 그 맛'
        },
        {
            number: 2,
            title: 'OptaVision',
            content: '방구석 전문가 그 이상을 위한 첫 걸음'
        },
        {
            number: 3,
            title: '런던 방앗간',
            content: '축구공은 둥굴고, 씨앗 또한 둥글다.'
        },
        {
            number: 4,
            title: 'Malden',
            content: 'Classic is Best'
        },
        {
            number: 5, 
            title: 'THERAGUN',
            content: '사랑을 향해 쏴라, 그게 마사지건이라 할지라도'
        }
    ]
    
    return (
        <ul className='AdvertisementsList'>
            <div style={{transfrom: `translateY-${70*idx}px`}}>
                {InfomationAdvertisement.map((item, idx)=>{
                    return(
                        <li className='adList' key={idx}>
                            <div className='ListTitle'>
                                {item['title']}
                            </div>
                            <div className='ListContent'>
                                {item['content']}
                            </div>
                        </li>
                    )
                })}
            </div>
        </ul>
        
    )
}



export default AdvertieseRolling