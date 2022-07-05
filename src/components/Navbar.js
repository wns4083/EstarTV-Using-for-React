import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import './Navbar.css';

function Navbar() {
    const [toggleState, isToggleState] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => isToggleState(!toggleState);
    const closeMobileMenu = () => isToggleState(false);

    const showButton = () =>{
        if(window.innerWidth <= 1250){
            setButton(false);
        }else{
            setButton(true);
        }
    };
    useEffect(()=>{
        showButton();
    },[]);
    window.addEventListener('resize', showButton);
  return (
    <>
        <nav className="navbar">
            <div className="navContainer">
                <Link to="/" className="navbarLogo" onClick={closeMobileMenu}>
                    <img src={process.env.PUBLIC_URL +'/images/EstarLogo.png'}
                         className="logo"
                         alt='estarlogo'
                    ></img>
                </Link>
                <div className="menuIcon" onClick={handleClick}>
                { toggleState ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
                </div>
                <ul className={toggleState ? 'navMenuActive' : 'navMenu' }>
                    <li className='navItem'>
                        <Link to='/' className='navLinks' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link to='/AboutUs' className='navLinks' onClick={closeMobileMenu}>
                            About US
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link to='/Contents' className='navLinks' onClick={closeMobileMenu}>
                            Contents
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link to='/Advertise' className='navLinks' onClick={closeMobileMenu}>
                            Advertisements
                        </Link>
                    </li>
                    <li className='navItem'>
                        <Link to='/Contact' className='navLinks' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar;