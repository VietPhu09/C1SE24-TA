import React from 'react'
import img from '../../assets/img/hoian.jpg'
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const SignUp = () => {
  return (
    <div className=' flex mt-20 flex-1 ml-10 mr-10'>
        <div className=' flex-1'>
            <img src={img} alt='Hoi An'/>
        </div>
        <div className=' ml-10 flex-1 flex flex-col items-center'>
            <h1 className=' text-4xl font-bold item'>Register</h1>
            <form className='w-full py-3 flex flex-col mt-5'>
              <div className='flex'>
                <div className=' flex-1'>
                    <label className=' font-medium text-slate-700'>First Name</label>
                    <input
                    type='text' 
                    id='firstName' 
                    name='firstName' 
                    placeholder='Name'
                    className='mt-1 mb-5 w-full border border-slate-300 px-2 py-2 rounded focus-within:outline-blue-300' 
                    /> 
                </div>
                <div className='ml-5 flex-1'>
                    <label className=' font-medium text-slate-700'>Last Name</label>
                    <input
                     type='text' 
                     id='lastname' 
                     name='lastname' 
                     placeholder='Name'
                     className='mt-1 mb-2 w-full border border-slate-300 px-2 py-2 rounded focus-within:outline-blue-300' 
                    />
                </div>
              </div>
              {/* User name */}
              <label className=' font-medium text-slate-700'>User Name</label>
              <input
                     type='text' 
                     id='username' 
                     name='username' 
                     placeholder='User name'
                     className='mt-1 mb-5 w-full border border-slate-300 px-2 py-2 rounded focus-within:outline-blue-300' 
                    />
              {/* Email */}
              <label className=' font-medium text-slate-700'>Email</label>
              <input
                     type='text' 
                     id='email' 
                     name='email' 
                     placeholder='Email'
                     className='mt-1 mb-5 w-full border border-slate-300 px-2 py-2 rounded focus-within:outline-blue-300' 
                    />
                    {/* Password */}
                     <label className=' font-medium text-slate-700'>Password</label>
              <input
                     type='text' 
                     id='password' 
                     name='password' 
                     placeholder='Password'
                     className='mt-1 mb-5 w-full border border-slate-300 px-2 py-2 rounded focus-within:outline-blue-300' 
                    />
                    {/* Confrim password */}
                     <label className=' font-medium text-slate-700'>Confirm Password</label>
              <input
                     type='text' 
                     id='confirmpassword' 
                     name='confirmpassword' 
                     placeholder='Confirm Password'
                     className='mt-1 mb-2 w-full border border-slate-300 px-2 py-2 rounded focus-within:outline-blue-300' 
                    />

                <button type='submit' className='w-full  m-auto py-3 bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white text-xl font-medium text-center  rounded-xl mt-5'>Sign Up</button>
            </form>
            <div className='flex justify-around items-center'>
            <span className=' h-px bg-slate-900 w-72'></span> <span className=' mx-2'>or</span> <span className=' h-px bg-slate-900 w-72'></span>
            </div>
            <div className='mt-5 w-full flex justify-around'>
                <button className='border border-slate-700 hover:border-slate-900 hover:bg-slate-100 py-2 px-20 rounded-lg focus:outline-none '><FcGoogle className=' text-4xl'/></button>
                <button className='border border-slate-700 hover:border-slate-900 hover:bg-slate-100 py-2 px-20 rounded-lg focus:outline-none '><BsFacebook className=' text-4xl'/></button>
            </div>
            <p className='text-left text-lg mt-2'>Already have account ? <Link to={'/login'} className='text-indigo-500 underline text-lg'>Login</Link></p>
        </div>
    </div>
  )
}
