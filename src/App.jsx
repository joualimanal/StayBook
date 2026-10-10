import Home from "./components/Home";
import { Routes,Route } from "react-router-dom";
import HotelDetails from "./components/HotelDetails"
import Favorites from "./components/Favorite";
import Navbar from "./components/Navbar";
import MyBookings from "./components/MyBookings";
import './App.css'
import Booking from "./components/Booking";
function App() {
  return (
    <>
  <Navbar/>
 <Routes>
  <Route path="/" element = {<Home/>}/>
  <Route path="/hotels/:id" element = {<HotelDetails/>}/>
  <Route path="/favorites" element={<Favorites />} />
  <Route path="/booking/:id"  element={<Booking/>}/>
  <Route path="/mybookings"  element={<MyBookings/>}/>
 
 </Routes>
 </>)
}

export default App;