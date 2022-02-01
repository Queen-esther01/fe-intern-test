import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

function Login() {

    const [formData, setformData] = useState({
        email: '',
        password: ''
    })
    const [errorEmail, seterrorEmail] = useState()
    const [errorPassword, seterrorPassword] = useState()
    const [inputType, setinputType] = useState('password')
    const [submitStatus, setsubmitStatus] = useState(false)

    //HANDLE INPUT FIELD CHANGES
    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    //TOGGLE PASSWORD VISIBILITY
    const showPassword = () => {
        if (inputType === 'password') {
            setinputType('text')
        } else {
            setinputType('password')
        }
    }

    //HANDLE FORM SUBMISSION
    const handleSubmit = (e) => {
        e.preventDefault()
        !(formData.email === '' || formData.password === '') && setsubmitStatus(true)

        if(formData.email === '') {
            console.log('you have no email')
            seterrorEmail('Please enter a valid email')
        }

        if(formData.password === '') {
            seterrorPassword('Password cannot be blank')
        }
    }


    //REMOVE ERROR MESSAGES ON INPUT CHANGE
    useEffect(() => {
        if(!(formData.email === '')) {
            seterrorEmail('')
        }
        if(!(formData.password === '')){
            seterrorPassword('')
        }
    }, [formData])


    return(
        <>
            <div className='login-background 2xl:h-screen'>
                <div className='sm:max-w-lg md:max-w-xl lg:max-w-4xl xl:max-w-5xl mx-auto'>
                    <Header/>
                    {
                        submitStatus && <div className="bg-green-600 mb-10 md:mb-0 mx-5 md:mx-0 sm:w-fit p-7 rounded-lg text-white flex">
                                            <span className="material-icons-outlined mr-2">check</span>
                                            <span> Signed in, you will be redirected in 2s</span>
                                        </div>
                    }
                    
                    <div className="card md:mt-16 mx-5 md:mx-0 sm:w-fit p-7 rounded-lg text-grey">
                        <h2 className='text-2xl sm:text-4xl'>Sign in</h2>
                        <form action="" className='mt-3'>
                            <div className=''>
                                <input type="email" name='email' onChange={handleChange} className="form-control" id="email" placeholder="Email address" />
                                { errorEmail && <p className='text-red-600 text-xs'>{errorEmail}</p> }
                            </div>
                            <div className='flex items-center'>
                                <input autoComplete="off" type={inputType} name='password' onChange={handleChange} className="form-control" id="password" placeholder="Password" />
                                <span onClick={showPassword} className="material-icons-outlined absolute right-10 cursor-pointer ">
                                    { inputType === 'password' ? 'visibility_off' : 'visibility' }
                                </span>
                            </div>
                            { errorPassword && <p className='text-red-600 block text-xs'>{errorPassword}</p> }
                            <div>
                                <input  type="checkbox" className='checkbox my-3' name="Remember me" id="" />
                                &nbsp;&nbsp;Remember me
                            </div>
                            <div>
                                <button disabled={formData.email === '' || formData.password === '' } onClick={handleSubmit} className='auth-button rounded-md w-full py-3 my-3 font-semibold tracking-widest '>SIGN IN</button>
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
