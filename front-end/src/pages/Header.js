import React from 'react'
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from "react";
import logo from '../assets/img/logo.png'
import avt from '../assets/img/avt.jpg'
import { useSelector, useDispatch } from "react-redux";
import { logoutRedux } from '../redux/userSlice';
import toast from 'react-hot-toast';

const Header = () => {
    const dispatch = useDispatch()
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const [showMenu, setShowMenu] = useState(false)

    const handleShowMenu = () => {
        setShowMenu(prev => ! prev)
    }

    const handleLogout = () => {
        dispatch(logoutRedux())
        toast.success("Logout succesfully")
    }

    const userData = useSelector((state) => state.user)


  return (
    <header>
    <nav className="bg-white p-3 border-b-2">
        <div className="max-w-7xl mx-auto flex justify-between" >
            <NavLink to='/'>
                {/* Ảnh Logo Trip Advisor */}
                <div className="flex items-center md:space-x-2 space-x-3">
                    <img src={logo} alt="Trip Advisor Logo" className="w-8 h-8 md:w-12 md:h-12 text-5xl" />
                    {/* <SiTripadvisor className="text-5xl" /> */}
                    <span className="text-xl md:text-2xl font-bold">Travel Advisor</span>
                </div>
            </NavLink>

            {/* Các tiêu đề SeePost Discover About us */}
            <div className="hidden md:flex space-x-2 items-center font-semibold">
                <NavLink to='/' className="transition duration-200 ease-in-out bg-transparent hover:bg-slate-100 text-black py-2 px-3 rounded-full hover:shadow-md">Home</NavLink>
                <NavLink to='/aboutus' className="transition duration-200 ease-in-out bg-transparent hover:bg-slate-100 text-black py-2 px-3 rounded-full hover:shadow-md">About us</NavLink>
                <NavLink to='/mytrip' className="transition duration-200 ease-in-out bg-transparent hover:bg-slate-100 text-black py-2 px-3 rounded-full hover:shadow-md">My Trips</NavLink>
            </div>

            {/* Các Buttons */}
            {
                userData.email ? 
                (
                    <div className="hidden md:flex space-x-5 items-center cursor-pointer relative">
                    <span className=" text-lg font-normal text-slate-900">{userData.user}</span>
                    <div className="border border-slate-900 rounded-full overflow-hidden" onClick={handleShowMenu}>
                        <img src={avt} alt="avt" className=" w-2/3 h-2/3 md:w-12 md:h-12"/>
                    </div>
                    {
                        showMenu && (
                            <div className="absolute top-16 right-2 bg-white rounded-xl py-3 px-5">
                            <ul className=" text-base font-normal w-full ">
                                <NavLink to='userprofile'>
                                <li className=" hover:text-blue-600">View Profile</li>
                                </NavLink>

                                <li className="hover:text-red-600" onClick={handleLogout}>Log out</li>
                            </ul>
                        </div>
                        )
                    }
                    </div>
                ) :
                (
                <div className="hidden md:flex space-x-5 items-center">
                <button className="text-black font-bold text-lg hover:text-blue-500">
                    <NavLink to='login'>Login</NavLink>
                </button>
                <NavLink to='signup'>
                    <button className="bg-[#0f172a] hover:bg-[#2529d7] text-white font-bold py-2 px-4 border-b-4 border-[#000000] hover:border-[#10127e] rounded ">
                        Sign up
                    </button>
                </NavLink>
            </div>
                )
            }
            {/*  */}
           
            


            {/* ##### GIAO DIỆN MOBILE Ở ĐÂY ##### */}
            <div className="md:hidden flex items-center ">
                <button onClick={toggleMobileMenu}>
                    <GiHamburgerMenu className="text-2xl" />
                </button>
            </div>

        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen &&
            <div className="md:hidden flex flex-col mt-3 space-y-2 ">
                <button className="p-2 text-left font-semibold hover:bg-slate-200 rounded-md border-l-4 border-slate-200 hover:shadow-md hover:transition duration-100 ease-in-out">
                    <NavLink to='login'>Login</NavLink>
                </button>
                <button className="p-2 text-left font-semibold hover:bg-slate-200 rounded-md border-l-4 border-slate-200 hover:shadow-md hover:transition duration-100 ease-in-out">
                    <NavLink to='signup'>Sign Up</NavLink>
                </button>
            </div>
        }

    </nav>
</header>
  )
}

export default Header