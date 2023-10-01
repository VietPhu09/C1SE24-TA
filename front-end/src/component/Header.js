import React from 'react'
import logo from '../assets/img/Logo.png'
import {AiOutlineHeart} from 'react-icons/ai'
import {GrCircleInformation} from 'react-icons/gr'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className=' max-h-20'>
        <nav className='bg-indigo-50 w-full h-full flex'>
            <a className='flex items-center justify-center mx-5'>
                <img src={logo} alt='Logo' className=' h-10 object-cover'/>
                <p className=' font-bold'>Travel Advisor</p>
            </a>
            <div>
                <div>
                    <AiOutlineHeart/>
                    <Link to={'/trips'}>Trips</Link>
                </div>
                <div>
                    <GrCircleInformation/>
                    <Link to={'/aboutus'}>About Us</Link>
                </div>
                <button>Sign In</button>
            </div>
        </nav>
    </header>
  )
}

export default Header