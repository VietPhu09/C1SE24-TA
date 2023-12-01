
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import { setDataLocation } from "../redux/locationSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
//Root layout là nơi sẽ render ra giao diện của trang NavBar
const RootLayout = () => {
    const API = "http://127.0.0.1:8000/"
    const dispatch = useDispatch()
    const locationData = useSelector((state) => state.location)
    useEffect(() => {
        (async() => {
            const res = await fetch(`${API}locations/`)
            const resData = await res.json()
            // console.log(resData)
            dispatch(setDataLocation(resData))
        }) ()
    }, [])

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