import { NavLink, Outlet } from "react-router-dom";

//Root layout là nơi sẽ render ra giao diện của trang NavBar
const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <nav className="bg-slate-400">
                    <div className="max-w-7xl mx-auto flex justify-between" >
                        {/* Ảnh Logo Trip Advisor */}
                        <div>

                        </div>

                        {/* Các tiêu đề SeePost Discover About us */}
                        <div className="flex space-x-4 items-center">
                            <NavLink to='/'>Home</NavLink>
                            <NavLink to='/Post'>See Post</NavLink>
                            <NavLink to='/About-us'>About us</NavLink>
                            <NavLink to='/Discover'>Discover</NavLink>
                        </div>

                        {/* Các Buttons */}
                        <div className="flex space-x-2 items-center">
                            <button className="bg-[#0f172a] hover:bg-[#2529d7] text-white font-bold py-2 px-4 border-b-4 border-[#000000] hover:border-[#10127e] rounded ">
                                <NavLink to='signup'>Sign Up</NavLink>
                            </button>
                            <button className="bg-[#0f172a] hover:bg-[#2529d7] text-white font-bold py-2 px-4 border-b-4 border-[#000000] hover:border-[#10127e] rounded">
                                <NavLink to='login'>Login</NavLink>
                            </button>
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