import React, {useState} from 'react'

function Exercise() {

const [isTabActive, setIsTabActive] = useState(0);
    const tabs = (index) =>{
        setIsTabActive(index);
        console.log(isTabActive);
        const tabContent = document.getElementsByClassName("tabContent");
        
        
        console.log(tabContent.length);

        for(let i =0; i<=tabContent.length; i++){
            if(i===index){
                tabContent[index].style.display="grid";
            }else{
                tabContent[i].style.display="none";
            }
            
        }
    }

  return (
    <div className='tab'>
                <button className={isTabActive===0 ? "tabLinks active" : "tabLinks"}
                        onClick={()=>tabs(0)}
                >
                    <h2>축구예능의 종가 이스타TV!</h2>
                </button>
                <button className={isTabActive===1 ? "tabLinks active" : "tabLinks"}
                        onClick={()=>tabs(1)}
                >
                    <h2>힙한 선택 히든풋볼!</h2>
                </button>
                <button className={isTabActive===2 ? "tabLinks active" : "tabLinks"}
                        onClick={()=>tabs(2)}
                >
                    <h2>어른들의 솔직한 이야기 넘버원Series!</h2>
                </button>
                <button className={isTabActive===3 ? "tabLinks active" : "tabLinks"}
                        onClick={()=>tabs(3)}>
                    <h2>누구도 믿지 마라! 수호미스터리!</h2>
                </button>
                <button className={isTabActive===4 ? "tabLinks active" : "tabLinks"}
                        onClick={()=>tabs(4)}>
                    <h2>인싸들과 풀어가는 히든솔로!</h2>
                </button>
            </div>
  )
}

export default Exercise