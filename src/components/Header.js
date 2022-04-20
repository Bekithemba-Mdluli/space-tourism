import React from 'react'
import logo from '../assets/shared/logo.svg';

function Header() {
    return (
        <header className='header'>
            <div>
                <img src={logo} alt="Logo" />
            </div>
        </header>
    )
}

export default Header