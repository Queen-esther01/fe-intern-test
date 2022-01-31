import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Login() {
    return(
        <>
            <div className='login-background 2xl:h-screen'>
                <div className='sm:max-w-lg md:max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto'>
                    <Header/>
                    <div className="card md:mt-16 mx-5 md:mx-0 sm:w-fit p-7 rounded-lg text-grey">
                        <h2 className='text-2xl sm:text-4xl'>Sign in</h2>
                        <form action="" className='mt-3'>
                            <div className=''>
                                <input type="email" className="form-control" id="email" placeholder="Email address" />
                            </div>
                            <div className='flex items-center'>
                                <input type="email" className="form-control" id="email" placeholder="Password" />
                                <span className="material-icons-outlined absolute right-10">visibility</span>
                            </div>
                            <div>
                                <input type="checkbox" className='checkbox my-3' name="Remember me" id="" />
                                &nbsp;&nbsp;Remember me
                            </div>
                            <div>
                                <button className='auth-button rounded-md w-full py-3 my-3 font-semibold tracking-widest '>SIGN IN</button>
                            </div>
                            <div className="my-3">
                                <Link to='#' className='my-3'>I forgot my password</Link>
                            </div>
                        </form>
                    </div>
                    <Footer/>
                </div>
            </div>
        </>
  )
}

export default Login;
