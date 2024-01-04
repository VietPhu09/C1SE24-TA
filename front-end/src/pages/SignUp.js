import React, { useState } from 'react'
import boy from '../assets/img/register.png'
import girl from '../assets/img/register2.png'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import {BiShow, BiHide} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import {toast} from 'react-hot-toast'



export const SignUp = () => {
  const navigate = useNavigate()
  const API = process.env.REACT_APP_SERVER_DOMAIN
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setConfirmPassword] = useState(false)
  const [data, setData ]= useState({
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
  })

  const handleOnchange = (e) => {
    const {name, value} = e.target
    setData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
    console.log(data)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const {first_name, last_name, email, password, confirmPassword} = data
    if(first_name && last_name && email && password && confirmPassword){
      if(password === confirmPassword){
        const fetchData = await fetch(`${API}signup/`, {
          method: "POST",
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify(data)
        })
        const dataRes = await fetchData.json()
        if(dataRes.message)
          toast.success(dataRes.message)
        else if  (dataRes.username)
          toast.error(dataRes.username[0])
        else
          toast.error(dataRes.error )
        console.log(dataRes)
        if(dataRes.status)
        {
          navigate('/login')
        }
      }
      else{
        toast.error("Password does not match")
      }
    }
    else{
      toast.error("Please enter require field")
    }
  }



  const handleShowPassword = () => {
    setShowPassword(prev => !prev)
  }
  const handleConfirmShowPassword = () => {
    setConfirmPassword(prev => !prev)
  }
  return (
    <div className=' flex mt-20 flex-1 ml-10 mr-10 max-h-screen'>
      <div className=' flex-1 flex items-center justify-center relative'>
        <img src={boy} alt='Hoi An' className=' object-cover h-2/4'/>
        <img src={girl} alt='Hoi An' className=' object-cover h-2/4'/>
        <p className=' absolute top-0 uppercase font-bold text-6xl text-indigo-500'>start your journey by one click, explore beautiful world</p>
      </div>
      <div className=' ml-10 flex-1 flex flex-col items-center '>
        <h1 className=' text-4xl font-bold item text-slate-700'>Register</h1>
        <form className='w-full py-3 flex flex-col mt-5' onSubmit={handleSubmit}>
          <div className='flex'>
            <div className=' flex-1'>
              <label className=' font-medium text-slate-700'>First Name</label>
              <input
                type='text'
                id='first_name'
                name='first_name'
                placeholder='Name'
                value={data.first_name}
                onChange={handleOnchange}
                className='mt-1 mb-5 w-full border border-slate-300 px-2 py-2 rounded focus-within:outline-blue-300'
              />
            </div>
            <div className='ml-5 flex-1'>
              <label className=' font-medium text-slate-700'>Last Name</label>
              <input
                type='text'
                id='last_name'
                name='last_name'
                placeholder='Name'
                value={data.last_name}
                onChange={handleOnchange}
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
            value={data.username}
            onChange={handleOnchange}
            placeholder='User name'
            className='mt-1 mb-5 w-full border border-slate-300 px-2 py-2 rounded focus-within:outline-blue-300'
          />
          {/* Email */}
          <label className=' font-medium text-slate-700'>Email</label>
          <input
            type='text'
            id='email'
            name='email'
            value={data.email}
            onChange={handleOnchange}
            placeholder='Email'
            className='mt-1 mb-5 w-full border border-slate-300 px-2 py-2 rounded focus-within:outline-blue-300'
          />
          {/* Password */}
          <label className=' font-medium text-slate-700'>Password</label>
          <div className='relative'>
          <input
            type={ showPassword ? 'text':'password'} 
            id='password'
            name='password'
            value={data.password}
            onChange={handleOnchange}
            placeholder='Password'
            className='mt-1 mb-5 w-full border border-slate-300 px-2 py-2 rounded focus-within:outline-blue-300'
          />
          <span className='flex text-xl cursor-pointer absolute top-4 right-2' onClick={handleShowPassword}>{showPassword ? <BiShow/> : <BiHide/>}</span>
          </div>
          
          {/* Confrim password */}
          <label className=' font-medium text-slate-700'>Confirm Password</label>
          <div className='relative'>
          <input
            type={ showConfirmPassword ? 'text':'password'} 
            id='confirmPassword'
            name='confirmPassword'
            value={data.confirmPassword}
            onChange={handleOnchange}
            placeholder='Password'
            className='mt-1 mb-5 w-full border border-slate-300 px-2 py-2 rounded focus-within:outline-blue-300'
          />
          <span className='flex text-xl cursor-pointer absolute top-4 right-2' onClick={handleConfirmShowPassword}>{showConfirmPassword ? <BiShow/> : <BiHide/>}</span>
          </div>

          <button type='submit' className='w-full  m-auto py-3 bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white text-xl font-medium text-center  rounded-xl mt-5'>Sign Up</button>
        </form>
        {/* <div className='flex justify-around items-center'>
          <span className=' h-px bg-slate-900 w-72'></span> <span className=' mx-2'>or</span> <span className=' h-px bg-slate-900 w-72'></span>
        </div>
        <div className='mt-5 w-full flex justify-around'>
          <button className='border border-slate-700 hover:border-slate-900 hover:bg-slate-100 py-2 px-20 rounded-lg focus:outline-none '><FcGoogle className=' text-4xl' /></button>
          <button className='border border-slate-700 hover:border-slate-900 hover:bg-slate-100 py-2 px-20 rounded-lg focus:outline-none '><BsFacebook className=' text-4xl' /></button>
        </div> */}
        <p className='text-left text-lg mt-2'>Already have account ? <Link to={'/login'} className='text-indigo-500 underline text-lg'>Login</Link></p>
      </div>
    </div>
  )
}
