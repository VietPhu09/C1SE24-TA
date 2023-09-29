import React from 'react'
import boy from '../assets/img/register.png'
import girl from '../assets/img/register2.png'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className=' flex mt-20 flex-1 ml-10 mr-10 max-h-screen'>
      <div className=' flex-1 flex items-center justify-center relative'>
        <img src={boy} alt='Hoi An' className=' object-cover h-2/4'/>
        <img src={girl} alt='Hoi An' className=' object-cover h-2/4'/>
        <p className=' absolute top-0 uppercase font-bold text-6xl text-indigo-500'>welcome back</p>
      </div>
      <div className=' ml-10 flex-1 flex flex-col items-center '>
        <h1 className=' text-4xl font-bold item text-slate-700'>Login</h1>
        <form className='w-full py-3 flex flex-col mt-5'>
          {/* User name */}
          <label className=' font-medium text-slate-700'>User Name</label>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='User name'
            className='mt-1 mb-5 w-full border border-slate-300 px-2 py-2 rounded focus-within:outline-blue-300'
          />
          {/* Password */}
          <label className=' font-medium text-slate-700'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            className='mt-1 mb-5 w-full border border-slate-300 px-2 py-2 rounded focus-within:outline-blue-300'
          />
          <div className='flex items-center justify-between'>
            <div>
              <input type='checkbox' className=' shadow-md'/>
              <label className=' font-semibold ml-2'>Remember me</label>
            </div>
            <div>
              <p className=' font-semibold text-indigo-500 cursor-pointer'>Forgot Password</p>
            </div>
          </div>

          <button type='submit' className='w-full  m-auto py-3 bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white text-xl font-medium text-center  rounded-xl mt-5'>Login</button>
        </form>
        <div className='flex justify-around items-center'>
          <span className=' h-px bg-slate-900 w-72'></span> <span className=' mx-2'>or</span> <span className=' h-px bg-slate-900 w-72'></span>
        </div>
        <div className='mt-5 w-full flex justify-around'>
          <button className='border border-slate-700 hover:border-slate-900 hover:bg-slate-100 py-2 px-20 rounded-lg focus:outline-none '><FcGoogle className=' text-4xl' /></button>
          <button className='border border-slate-700 hover:border-slate-900 hover:bg-slate-100 py-2 px-20 rounded-lg focus:outline-none '><BsFacebook className=' text-4xl' /></button>
        </div>
        <p className='text-left text-lg mt-2'>Dont have an account ? <Link to={'/signup'} className='text-indigo-500 underline text-lg'>Create Account</Link></p>
      </div>
    </div>
  )
}
