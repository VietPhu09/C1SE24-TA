
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
//Root layout là nơi sẽ render ra giao diện của trang NavBar
const RootLayout = () => {
    

    return (


        <div className="root-layout">
            <Toaster/>
           <Header/>

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