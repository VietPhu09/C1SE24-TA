import React, {useEffect, useState} from 'react'
import loginrequired from '../../assets/HomeImg/loginrequired.png'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import {GrClose} from 'react-icons/gr'

import { Link, NavLink } from 'react-router-dom'

import { signInWithGoogle } from '../../firebase/firebaseconfig'
import firebase from '../../firebase/firebaseconfig'
import { auth } from '../../firebase/firebaseconfig'

const LoginRequired = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        // User is signed in.
        setUser(authUser);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    return () => {
      // Unsubscribe when the component unmounts.
      unsubscribe();
    };
  }, []);

  console.log(user)



  return (
    <div className='fixed inset-0 z-50 '>
        {/* Overlay */}
        <div class="absolute inset-0 bg-black opacity-40"></div>
        {/* Main contain */}
        <div className='w-full h-full relative'>
            <div className='bg-white rounded-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-4 px-4 flex flex-col items-center'>
              {/* Close button */}
                <div onClick={props.active} className='absolute top-4 right-4 cursor-pointer rounded-full hover:bg-slate-200 p-2'>
                  <GrClose/>
                </div>
                {/* Button */}
                <h1 className='text-xl font-bold text-slate-900 mb-5'><span className='text-2xl font-bold text-red-800'>Oops!</span> You need login to use this feature!</h1>
                <div className='flex h-1/3 justify-around'>
                  <div className='h-1/3 w-1/3 overflow-hidden'>
                    <img src={loginrequired} className='w-full h-full object-cover' alt='loginrequired'/>
                  </div>
                  <div className='w-1/3 flex flex-col'>
                    <div className='mb-5'>
                      <p className='text-slate-900 text-base font-semibold'>Already have an account?</p>
                      <NavLink to={'/login'}>
                        <button className='px-8 py-2 mt-2 w-full bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white font-semibold text-base'>Login</button>
                      </NavLink>
                    </div>
                    <div className='flex justify-around items-center'>
                      <span className=' h-px bg-slate-900 w-72'></span> <span className=' mx-2'>or</span> <span className=' h-px bg-slate-900 w-72'></span>
                    </div>
                    <div className='mt-5'>
                      <button onClick={signInWithGoogle} className='border border-slate-700 hover:border-slate-900 hover:bg-slate-100 py-5 w-full rounded-lg focus:outline-none relative '><FcGoogle className=' text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' /></button>
                      <button className='border border-slate-700 hover:border-slate-900 hover:bg-slate-100 py-5 w-full rounded-lg focus:outline-none relative mt-2 '><BsFacebook className=' text-3xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' /></button>
                    </div>
                    <div>
                    <p className='mt-2 text-slate-900 text-base font-semibold'>Dont have an account ? <Link to={'/signup'} className='text-indigo-500 underline text-base'>Create Account</Link></p>
                    </div>
                  </div>
                </div>            
            </div>
        </div>
    </div>
  )
}

export default LoginRequired