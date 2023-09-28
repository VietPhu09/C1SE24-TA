import { NavLink, Outlet } from "react-router-dom";

//Root layout là nơi sẽ render ra giao diện của trang NavBar
const RootLayout = () => {
    return (
        <div className="root-layout">
            <header>
                <nav>
                    <h1>Hảo Long</h1>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='signup'>Sign Up</NavLink>
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