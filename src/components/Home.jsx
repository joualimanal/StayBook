import { useState, useMemo, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import HotelCard from "./HotelCard";
import hotels from "../data/hotels";

function Home() {
 
const [search,setSearch]=useState(localStorage.getItem("search") || "")
const [maxPrice,setMaxPrice]=useState(Number(localStorage.getItem("maxPrice")) || 2000)
const  filtredHotels = useMemo(()=>{
  return hotels.filter((hotel) => {
  return (
    hotel.city.toLowerCase().includes(search.toLowerCase()) &&
    hotel.price <= maxPrice
  );
})
},[search,maxPrice]);

useEffect(() => {
  localStorage.setItem("search", search);
  localStorage.setItem("maxPrice", maxPrice);
}, [search, maxPrice]);
  return (
    <div>

     
      <Hero/>
      <div className="search">
      <input type="text" className="searchBr"  placeholder="Search by city..." value={search} onChange={(e)=>setSearch(e.target.value)}/>
      <input type="number" placeholder="price" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))}/>
      </div>
   <h1>─ ─ ─ ─ ─ ─ ─ ─ ─ ─ Popular Hotels ─ ─ ─ ─ ─ ─ ─ ─ ─ ─</h1>

      <div className="listings">
      {filtredHotels.map((hotel)=>(
         <HotelCard  key={hotel.id}  hotel={hotel} />
      ))}
      
      </div>

      
    </div>
  );
}

export default Home
