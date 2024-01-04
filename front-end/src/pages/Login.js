import React, { useState } from 'react'
import boy from '../assets/img/register.png'
import girl from '../assets/img/register2.png'
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import {BiShow, BiHide} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import {useDispatch, useSelector} from 'react-redux'
import {loginRedux} from '../redux/userSlice'

export const Login = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userData = useSelector(state => state)
  const API = process.env.REACT_APP_SERVER_DOMAIN
  const [showPassword, setShowPassword] = useState(false)
  const [data, setData] = useState({
    username: "",
    password: ""
  })
  
  const handleOnchange = (e) => {
    e.preventDefault()
    const {name, value} = e.target
    setData((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
    // console.log(data)
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    const {username, password} = data
    if(username && password){
      const fetchData = await fetch(`${API}login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      const dataRes = await fetchData.json()
      console.log(dataRes)
      if(dataRes.message){
        toast.success(dataRes.message)
        toast(`Welcome back! ${dataRes.user.username}`,
        {
          icon: '👏',
          style: {
            borderRadius: '10px'
          },
        })
        dispatch(loginRedux(dataRes))
        //store access token
        localStorage.setItem('accessToken', dataRes.token.access)
        navigate('/')
      }
      else if(dataRes.error)
        toast.error(dataRes.error)
    }
    else{
      toast.error("Please enter require field")
    }
  }

  const handleShowPassword = () =>{
    setShowPassword(prev => !prev)
  }
  return (
    <div className=' flex mt-20 flex-1 ml-10 mr-10 max-h-screen'>
      <div className=' flex-1 flex items-center justify-center relative'>
        <img src={boy} alt='Hoi An' className=' object-cover h-2/4'/>
        <img src={girl} alt='Hoi An' className=' object-cover h-2/4'/>
        <p className=' absolute top-0 uppercase font-bold text-6xl text-indigo-500'>welcome back</p>
      </div>
      <div className=' ml-10 flex-1 flex flex-col items-center '>
        <h1 className=' text-4xl font-bold item text-slate-700'>Login</h1>
        <form className='w-full py-3 flex flex-col mt-5' onSubmit={handleSubmit}>
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
        {/* <div className='flex justify-around items-center'>
          <span className=' h-px bg-slate-900 w-72'></span> <span className=' mx-2'>or</span> <span className=' h-px bg-slate-900 w-72'></span>
        </div>
        <div className='mt-5 w-full flex justify-around'>
          <button className='border border-slate-700 hover:border-slate-900 hover:bg-slate-100 py-2 px-20 rounded-lg focus:outline-none '><FcGoogle className=' text-4xl' /></button>
          <button className='border border-slate-700 hover:border-slate-900 hover:bg-slate-100 py-2 px-20 rounded-lg focus:outline-none '><BsFacebook className=' text-4xl' /></button>
        </div> */}
        <p className='text-left text-lg mt-2'>Dont have an account ? <Link to={'/signup'} className='text-indigo-500 underline text-lg'>Create Account</Link></p>
      </div>
    </div>
  )
}
