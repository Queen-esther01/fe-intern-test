import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <>
            <div className=" w-auto mx-5 md:mx-0 py-16 2xl:py-28">
                <p className='text-grey text-sm '>
                    If you find difficulty accessing your<br/> 
                    account, Get help <Link to='#' className='underline'>here</Link>.
                </p>
            </div>
        </>
    )
}

export default Footer;
