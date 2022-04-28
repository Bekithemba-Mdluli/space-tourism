import React, { useState } from 'react'
import { Link } from "react-router-dom";

import logo from '../assets/shared/logo.svg';
import menu from '../assets/shared/icon-hamburger.svg';
import close from '../assets/shared/icon-close.svg';

function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <header className='header'>
                <div className='header__logo'>
                    <img src={logo} alt="Logo" />
                </div>

                <div className='header__menu hide-for-tablet' onClick={toggleNav}>
                    <img src={menu} alt="menu" />
                </div>
                {/* <hr /> */}
                {/* <div className='hrr hft'></div> */}
                <nav className='header__nav hide-for-mobile'>

                    {/* <div>
                        <hr />
                    </div> */}


                    <ul className='header__nav-ul'>
                        <li className={window.location.pathname === '/' ? 'active' : ''}><Link to='/'><span className='hft'>00</span>Home</Link></li>
                        <li className={window.location.pathname === '/destination' ? 'active' : ''}><Link to='/destination'><span className='hft'>01</span>Destination</Link></li>
                        <li className={window.location.pathname === '/crew' ? 'active' : ''}><Link to='/crew'><span className='hft'>02</span>Crew</Link></li>
                        <li className={window.location.pathname === '/technology' ? 'active' : ''}><Link to='/technology'><span className='hft'>03</span>Technology</Link></li>
                    </ul>
                </nav>

            </header>
            <nav className={isOpen ? 'header__navM' : 'header__navM hide'} data-visible="true">
                <div className='header__navM-img'>
                    <img src={close} alt="Close" onClick={toggleNav} />
                </div>
                <ul>
                    <li className={window.location.pathname === '/' ? 'active' : ''}><Link to='/'><span className='hft'>00</span>Home</Link></li>
                    <li className={window.location.pathname === '/destination' ? 'active' : ''}><Link to='/destination'><span className='hft'>01</span>Destination</Link></li>
                    <li className={window.location.pathname === '/crew' ? 'active' : ''}><Link to='/crew'><span className='hft'>02</span>Crew</Link></li>
                    <li className={window.location.pathname === '/technology' ? 'active' : ''}><Link to='/technology'><span className='hft'>02</span>Technology</Link></li>
                </ul>
            </nav>
        </>
    )
}
export default Header