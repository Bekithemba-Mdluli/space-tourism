import React, { useState } from 'react'
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

                {/* <div className='l'> */}
                {/* <hr className='line hft' /> */}
                <nav className='header__nav hide-for-mobile'>
                    <ul className='header__nav-ul'>
                        <li className='active'><a href='/'><span className='hft'>00</span>Home</a></li>
                        <li><a href='/'><span className='hft'>01</span>Crew</a></li>
                        <li><a href='/'><span className='hft'>02</span>Technology</a></li>
                        <li><a href='/'><span className='hft'>03</span>Destination</a></li>
                    </ul>
                </nav>


                {/* </div> */}
            </header>
            <nav className={isOpen ? 'header__navM' : 'header__navM hide'} data-visible="true">
                <div className='header__navM-img'>
                    <img src={close} alt="Close" onClick={toggleNav} />
                </div>
                <ul>
                    <li className='active'><a href='/'><span>00</span>Home</a></li>
                    <li><a href='/'><span>01</span>Destination</a></li>
                    <li><a href='/'><span>02</span>Crew</a></li>
                    <li><a href='/'><span>03</span>Technology</a></li>
                </ul>
            </nav>
        </>
    )
}
// 00 Home
// 01 Destination
// 02 Crew
// 03 Technology
export default Header