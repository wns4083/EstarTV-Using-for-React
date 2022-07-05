import React, {useState,useEffect} from 'react'
import './FormCard.css';
function FormCard() {
    
    const [isName, setName] = useState('');
    const [isEamil, setEmail]= useState('');
    const [isPhone, setPhone] = useState('');

    const alerts = () =>{
       alert(`${isName}께서 연락 받으실 ${isEamil} 이메일 주소와 ${isPhone} 전화번호를 남기셨습니다.`);
    }
    
  return (
    <>
        <section className='contactForm'>
            <div className='formTitle'>
                <h2>Contact</h2>
                <p>연락처를 남겨주세요.</p>
            </div>
            <form className='formWrrap' action='submit' method='post'>
                <fieldset className='fdset'>
                    <legend>작성 내용</legend>
                    <div className='submitNames'>
                        <label>
                            이름(업체)
                            <input type="text" 
                                   name="company"
                                   value={isName}
                                   onChange={(e)=>setName(e.target.value)}
                                   className='sbmName'
                                   placeholder='이름(업체)'
                                   />
                        </label>
                    </div>
                    <div className='submitEmails'>
                        <label>
                            Email
                            <input type="text" 
                                   name="emails"
                                   value={isEamil}
                                   onChange={(e)=>setEmail(e.target.value)}
                                   className='sbmEmail'
                                   placeholder='E-mail'
                                   />
                        </label>
                    </div>
                    <div className='submitPhone'>
                        <label>
                            전화번호
                            <input type="text" 
                                   name="phones"
                                   className='sbmPhone'
                                   placeholder='Tel'
                                   value={isPhone}
                                   onChange={(e)=>{setPhone(e.target.value)}}
                                   />
                        </label>
                    </div>
                    <button className='sbmBtn'
                            onClick={alerts}
                            type='submit'
                            method="post"
                    >
                        제출하기
                    </button>
                </fieldset>
            </form>
        </section>
    </>
  )
}

export default FormCard