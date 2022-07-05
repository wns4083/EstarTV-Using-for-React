import React from 'react'

import './AboutInfomation.css'
function AboutInfomation() {
  return (
    <div className='infomation'>
        <div className='infoWrrap'>
            <div className='Introduction AboutUs'>
                <h2>COMPANY INTRODUCTION</h2>
                <p>국내 최고 축구 예능 전문</p>
            </div>
            <div className='info_left'>
                <span className='topWord'>
                    Korea No.1 축구 예능
                </span>
                <h2>
                    Youtube &amp; Radio Entertainments
                </h2>
                <span className='ceoImg'>
                    <img src={process.env.PUBLIC_URL +'/images/aboutUs/ceo.png'}
                        alt='CEOIMGAGES'
                        />
                </span>
            </div>
            <div className='info_right'>
                <p>
                    (주)랩추종윤은 축구가 전부가 아닌 두 남자가 만나서 시작되었습니다.
                </p>
                <p>
                    이주헌, 박종윤 두 공동대표의 예능감각과 더 불어 쉽게 접하는 정보들과 재미있는 가십들로 독보적인 컨탠츠를 발전시켜 나갔습니다. 조금 더 대중들에게 친숙하고 가볍게 일상의 재미를 더 해줄 수 있는 형태의 컨탠츠들로 인해 (주)랩추종윤은 많은 발전을 이루어 낼 수 있었습니다. 현재 50만 이상의 구독자분들을 보유하고 있으며 총 조회수 8억 회 이상을 달성하는 등의 대형 엔터테인먼트로서 발전하고 있습니다. 
                </p>
            </div>
        </div>
        <table className='tableInfo'>
            <tbody>
                <tr className='one'>
                    <th scope="row">Company Name</th>
                    <td className='right'>(주)랩추종윤</td>
                </tr>
                <tr className='two'>
                    <th scop="row">C.E.O</th>
                    <td className='right'>LEE JOO HEON, PARK JONG YUN</td>
                </tr>
                <tr className='three'>
                    <th scop="row">Business Field</th>
                    <td className='right'>Football Radio &amp; Youtube Entertainments</td>
                </tr>
                <tr className='four'>
                    <th scop="row">Address</th>
                    <td className='right'> 07788 서울특별시 강서구 마곡서로 152 (마곡동) 두산더랜드타워 B동 1009호</td>
                </tr>
                <tr className='four'>
                    <th scop="row">Tel</th>
                    <td className='right'>02-6933-7000</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default AboutInfomation