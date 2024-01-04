import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import RootLayout from '../src/layouts/RootLayout'
import { Home } from './pages/Home'
import { SignUp } from "./pages/SignUp";
import { Login } from './pages/Login'
import TripCreate from './pages/TripCreate'
import UserProfile from '../src/components/UserProfile/UserProfile'
import LocationDetail from "./pages/LocationDetail";
import FavoriteLocations from "./pages/FavoriteLocations/FavoriteLocations";
import MyTrip from "./pages/MyTrip";
import SingleMytrip from "./components/My_Trip_Component/My_Trip_Detail/SingleMytrip";
import AboutUs from "./pages/AboutUs";
/*App là nơi chứa cách hoạt động của các Router 
nơi điều khiển các component sẽ render khi gặp tên đường link tương ứng
*/

// 1. Tạo một biến const router để cấu hình customize router linh hoạt hơn
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>
      <Route path="signup" element={<SignUp />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="userprofile" element={<UserProfile/>}></Route>
      <Route path="tripcreate" element={<TripCreate/>}></Route>
      <Route path="detail/:filterby" element={<LocationDetail/>}></Route>
      <Route path="favorite" element={<FavoriteLocations/>}></Route>
      <Route path = "mytrip" element={<MyTrip/>}></Route>
      <Route path="mytripdetail/:filterby" element={<SingleMytrip/>}></Route>
      <Route path="aboutus" element={<AboutUs/>}></Route>
    </Route>
  )
)


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
