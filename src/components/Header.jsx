import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Header() {
    return(
        <>
            <div className='flex mx-3 md:mx-0 justify-between items-center text-white py-16'>
                <Logo/>
                <nav>
                    <Link to='#' className='text-xs md:text-sm mr-3 md:mr-4'>Contact us</Link>
                    <Link to='#' className='text-xs md:text-sm ml-3 md:ml-4'>About</Link>
                </nav>
            </div>
        </>
    )
}

export default Header;
