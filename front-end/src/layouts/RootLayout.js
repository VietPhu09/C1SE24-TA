import { NavLink, Outlet } from "react-router-dom";

//Root layout là nơi sẽ render ra giao diện của trang NavBar
const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <nav className="bg-white p-5 border-b-2">
                    <div className="max-w-7xl mx-auto flex justify-between" >
                        {/* Ảnh Logo Trip Advisor */}
                        <div>
                            <img src="../assets/img/logo.png"></img>
                        </div>

                        {/* Các tiêu đề SeePost Discover About us */}
                        <div className="hidden md:flex space-x-5 items-center font-semibold">
                            <NavLink to='/' className="transition duration-200 ease-in-out bg-transparent hover:bg-slate-200 text-black py-2 px-4 rounded-full">Home</NavLink>
                            <NavLink to='/Post' className="transition duration-200 ease-in-out bg-transparent hover:bg-slate-200 text-black py-2 px-4 rounded-full">See Post</NavLink>
                            <NavLink to='/About-us' className="transition duration-200 ease-in-out bg-transparent hover:bg-slate-200 text-black py-2 px-4 rounded-full">About us</NavLink>
                            <NavLink to='/Discover' className="transition duration-200 ease-in-out bg-transparent hover:bg-slate-200 text-black py-2 px-4 rounded-full">Discover</NavLink>
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
                        <div>

                        </div>

                    </div>
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