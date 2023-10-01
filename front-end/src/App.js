import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from '../src/layouts/RootLayout'
import { Home } from './pages/Home'
import { SignUp } from "./pages/SignUp";
import {Login} from './pages/Login'
import Trips from "./pages/Trips";
import About from "./pages/About";
/*App là nơi chứa cách hoạt động của các Router 
nơi điều khiển các component sẽ render khi gặp tên đường link tương ứng
*/

// 1. Tạo một biến const router để cấu hình customize router linh hoạt hơn
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="signup" element={<SignUp />}></Route>
      <Route path="login" element={<Login/>}></Route>
      <Route path="trips" element={<Trips/>}></Route>
      <Route path="aboutus" element={<About/>}></Route>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
