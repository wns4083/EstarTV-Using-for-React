import React,{useEffect} from 'react'

import GridType from './GridType';
import Aos from 'aos';
import '../aos.css';
import './ContentGrid.css'

function ContentGrid() {
    let gridSetting = {
        margin: '0 auto',
        width: '1880px',
        justifyContent:'center',
        alginItems:'center',
        display:'grid',
        gridTemplateColumns: "repeat(12, 142px)",
        gridTemplateRows: "repeat(6, 120px)",
        gap:"16px 16px"
    }
    
    useEffect(()=>{
        Aos.init({
          duration: 1000,
          delay:500,
          disable: false // Phon, tablet, mobile
        })
      }) 
        
    
    
  return (
    <div className='contentContainer'>
            <section className='contents'>
                <div className='contentsName'>
                    <h2>축구예능의 종가 이스타TV!</h2>
                </div>
                <a href='https://www.instagram.com/'
                   target="_blank"
                   rel="noopener noreferrer"
                >
                <div className='gridWrrap' 
                     style={gridSetting}
                     data-aos="fade-right"
                     >
                <GridType names='contentsASub1'
                          styles='1/1/5/7'
                          src='images/contents/sub1content1.jpg'
                          alt="subs"          
                />
                <GridType names='contentsASub2'
                          styles="1/7/5/10"
                          src='images/contents/sub1content2.jpg'
                          alt="subs"          
                />
                <GridType names='contentsASub3'
                          styles="1/10/5/13"
                          src='images/contents/sub1content3.jpg'
                          alt="subs"          
                />
                <GridType names='contentsASub4'
                          styles="5/1/7/4"
                          src='images/contents/sub1content4.jpg'
                          alt="subs"          
                />
                <GridType names='contentsASub5'
                          styles="5/4/7/7"
                          src='images/contents/sub1content5.jpg'
                          alt="subs"          
                />
                <GridType names='contentsASub6'
                          styles="5/7/7/10"
                          src='images/contents/sub1content6.jpg'
                          alt="subs"          
                />
                <GridType names='contentsASub7'
                          styles="5/10/7/13"
                          src='images/contents/sub1content7.jpg'
                          alt="subs"          
                />
                </div>
                </a>
            </section>
            <section className='contents'>
                <div className='contentsName'>
                    <h2>힙한 선택 히든풋볼!</h2>
                </div>
                <div className='gridWrrap' 
                     style={gridSetting}
                     data-aos="fade-left"
                     data-aos-offset="100"
                     >
                <GridType names='contentsBSub1'
                          styles="1/1/7/7"
                          src='images/contents/sub2content1.jpg'
                          alt="subs"          
                />
                <GridType names='contentsBSub2'
                          styles="1/7/7/13"
                          src='images/contents/sub2content2.jpg'
                          alt="subs"          
                />
                </div>
            </section>
            <section className='contents'>
                <div className='contentsName'>
                    <h2>어른들의 솔직한 이야기 넘버원Series!</h2>
                </div>
                <div className='gridWrrap' 
                     style={gridSetting}
                     data-aos="fade-right"
                     data-aos-offset="200"
                     >
                <GridType names='contentsCSub1'
                          styles="1/1/5/7"
                          src='images/contents/sub3content1.jpg'
                          alt="subs"          
                />
                <GridType names='contentsCSub2'
                          styles="1/7/5/13"
                          src='images/contents/sub3content2.jpg'
                          alt="subs"          
                />
                <GridType names='contentsCSub3'
                          styles="5/1/7/4"
                          src='images/contents/sub3content3.jpg'
                          alt="subs"          
                />
                <GridType names='contentsCSub4'
                          styles="5/4/7/7"
                          src='images/contents/sub3content4.jpg'
                          alt="subs"          
                />
                <GridType names='contentsCSub5'
                          styles="5/7/7/10"
                          src='images/contents/sub3content5.jpg'
                          alt="subs"          
                />
                <GridType names='contentsCSub6'
                          styles="5/10/7/13"
                          src='images/contents/sub3content6.jpg'
                          alt="subs"          
                />
                </div>
            </section>
            <section className='contents'>
                <div className='contentsName'>
                    <h2>누구도 믿지 마라! 수호미스터리!</h2>
                </div>
                <div className='gridWrrap'
                     style={gridSetting}
                     data-aos="fade-left"
                     data-aos-offset="200"
                     >
                <GridType names='contentsDSub1'
                          styles="1/1/5/13"
                          src='images/contents/sub4content1.jpg'
                          alt="subs"          
                />
                <GridType names='contentsDSub2'
                          styles="5/1/7/4"
                          src='images/contents/sub4content2.jpg'
                          alt="subs"          
                />
                <GridType names='contentsDSub3'
                          styles="5/4/7/7"
                          src='images/contents/sub4content3.jpg'
                          alt="subs"          
                />
                <GridType names='contentsDSub4'
                          styles="5/7/7/10"
                          src='images/contents/sub4content4.jpg'
                          alt="subs"          
                />
                <GridType names='contentsDSub5'
                          styles="5/10/7/13"
                          src='images/contents/sub4content5.jpg'
                          alt="subs"          
                />
                </div>
            </section>
            <section className='contents'>
                <div className='contentsName'>
                    <h2>인싸들과 풀어가는 히든솔로!</h2>
                </div>
                <div className='gridWrrap' 
                     style={gridSetting}
                     data-aos="fade-right"
                     data-aos-offset="200"
                     >
                <GridType names='contentsESub1'
                          styles="1/1/5/4"
                          src='images/contents/sub5content1.jpg'
                          alt="subs"          
                />
                <GridType names='contentsESub2'
                          styles="1/4/5/10"
                          src='images/contents/sub5content2.jpg'
                          alt="subs"          
                />
                <GridType names='contentsESub3'
                          styles="1/10/5/13"
                          src='images/contents/sub5content3.jpg'
                          alt="subs"          
                />
                <GridType names='contentsESub4'
                          styles="5/1/7/4"
                          src='images/contents/sub5content4.jpg'
                          alt="subs"          
                />
                <GridType names='contentsESub5'
                          styles="5/4/7/7"
                          src='images/contents/sub5content5.jpg'
                          alt="subs"          
                />
                <GridType names='contentsESub6'
                          styles="5/7/7/10"
                          src='images/contents/sub5content6.jpg'
                          alt="subs"          
                />
                <GridType names='contentsESub7'
                          styles="5/10/7/13"
                          src='images/contents/sub5content7.jpg'
                          alt="subs"          
                />
                </div>
            </section>
    </div>
  )
}

export default ContentGrid