import React from 'react'


import ActorsItem from './ActorsItem'
import './Actors.css'
function Actors() {
  const gridSize = { width: '100%', height: '100%'};
  
  return (
    <section className='actorsIndexContainer'>
       <div className='subject2'>
        <h2>Actors</h2>
       </div>
       <div className='actorWrrap'>
           <ActorsItem
              names='ActorImg1'
              src='images/Actors/choo.jpg'
              alt='ActorImg1'
              text='이스타'
              detail='예능 그 이상의 개그감각의 보유자'
              styles={gridSize}
            />
            <ActorsItem
              names='ActorImg2'
              src='images/Actors/bun2.jpg'
              alt='ActorImg2'
              text='박종윤'
              detail='Light heavy 아스날 팬'
              styles={gridSize}
            />
            <ActorsItem
              names='ActorImg3'
              src='images/Actors/hwang.jpg'
              alt='ActorImg3'
              text='황덕연'
              detail='추맨의 후계자를 노리는 남자'
              styles={gridSize}
            />
            <ActorsItem
              names='ActorImg4'
              src='images/Actors/imh.jpg'
              alt='ActorImg4'
              text='임형철'
              detail='축구와 연애를 맞바꾼 남자'
              styles={gridSize}
            />
            <ActorsItem
              names='ActorImg5'
              src='images/Actors/song.jpg'
              alt='ActorImg5'
              text='송영주'
              detail='바르셀로나 광명지부장'
              styles={gridSize}
            />
            <ActorsItem
              names='ActorImg6'
              src='images/Actors/park.jpg'
              alt='ActorImg6'
              text='박찬우'
              detail='인테르 깎는 노인'
              styles={gridSize}
            />
            <ActorsItem
              names='ActorImg7'
              src='images/Actors/bin.jpg'
              alt='ActorImg7'
              text='임수빈'
              detail='해설위원계 용역꾼'
              styles={gridSize}
            />
            <ActorsItem
              names='ActorImg8'
              src='images/Actors/han.jpg'
              alt='ActorImg8'
              text='한준희'
              detail='해설위원의 역사 그 자체'
              styles={gridSize}
            />
            <ActorsItem
              names='ActorImg9'
              src='images/Actors/jang.jpg'
              alt='ActorImg9'
              text='장지현'
              detail='첼버지라 불리는 사나이'
              styles={gridSize}
            />
            <ActorsItem
              names='ActorImg10'
              src='images/Actors/son.jpg'
              alt='ActorImg10'
              text='손수호'
              detail='변호사이자 인천 유나이티드의 훌리건'
              styles={gridSize}
            />
            <ActorsItem
              names='ActorImg11'
              src='images/Actors/hwany.jpg'
              alt='ActorImg11'
              text='김환'
              detail='"여러가지"하는 기자이자 해설위원'
              styles={gridSize}
            />
            <ActorsItem
              names='ActorImg12'
              src='images/Actors/rew.jpg'
              alt='ActorImg12'
              text='류청'
              detail='아내가 무서운 남자'
              styles={gridSize}
            />
       </div>
    </section>
  )
}

export default Actors