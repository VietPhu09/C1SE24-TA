import { NavLink, Outlet } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from "react";
import { SiTripadvisor } from 'react-icons/si'
import logo from '../assets/img/logo.png'
//Root layout là nơi sẽ render ra giao diện của trang NavBar
const RootLayout = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="root-layout">
            <header>
                <nav className="bg-white p-5 border-b-2">
                    <div className="max-w-7xl mx-auto flex justify-between" >
                        {/* Ảnh Logo Trip Advisor */}
                        <div className="flex items-center md:space-x-2 space-x-3">
                            <img src={logo} alt="Trip Advisor Logo" className="w-10 h-10 md:w-16 md:h-16 text-5xl" />
                            {/* <SiTripadvisor className="text-5xl" /> */}
                            <span className="text-xl md:text-2xl font-bold">Trip Advisor</span>
                        </div>

                        {/* Các tiêu đề SeePost Discover About us */}
                        <div className="hidden md:flex space-x-2 items-center font-semibold">
                            <NavLink to='/' className="transition duration-200 ease-in-out bg-transparent hover:bg-slate-100 text-black py-2 px-3 rounded-full hover:shadow-md">Home</NavLink>
                            <NavLink to='/Post' className="transition duration-200 ease-in-out bg-transparent hover:bg-slate-100 text-black py-2 px-3 rounded-full hover:shadow-md">See Post</NavLink>
                            <NavLink to='/About-us' className="transition duration-200 ease-in-out bg-transparent hover:bg-slate-100 text-black py-2 px-3 rounded-full hover:shadow-md">About us</NavLink>
                            <NavLink to='/Discover' className="transition duration-200 ease-in-out bg-transparent hover:bg-slate-100 text-black py-2 px-3 rounded-full hover:shadow-md">Discover</NavLink>
                        </div>

                        {/* Các Buttons */}
                        <div className="hidden md:flex space-x-5 items-center">
                            <button className="text-black font-bold text-lg">
                                <NavLink to='login'>Login</NavLink>
                            </button>
                            <button className="bg-[#0f172a] hover:bg-[#2529d7] text-white font-bold py-2 px-4 border-b-4 border-[#000000] hover:border-[#10127e] rounded ">
                                <NavLink to='signup'>Sign Up</NavLink>
                            </button>
                        </div>

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

            {/* Outlet sẽ hiển thị nội dung của route được kích hoạt trong ParentComponent. 
            Bất cứ khi nào bạn truy cập một đường dẫn được chỉ định trong Route, 
            Outlet sẽ hiển thị nội dung của route đó. */}
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout