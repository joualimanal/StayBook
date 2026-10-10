import { useState } from "react"
import "./MyBooking.css"


function MyBookings() {
     const [bookings,setBookings] = useState(()=>{
        return JSON.parse(localStorage.getItem("staybookings")|| "[]")
     })
      
     function cancelBooking(id){
       const updateBooking = bookings.filter((booking)=>booking.id !== id);
       setBookings(updateBooking)
       localStorage.setItem("staybookings" , JSON.stringify(updateBooking))
       
     }
  return (
    <div>
       <h1>my bookings </h1>
       <div className="bookings-list">
       {bookings.length ===0 ? (<p>no booking yet .</p>) : (
        bookings.map((booking)=>(
            <div className="booking-item" key={booking.id}>
            <h2>{booking.hotelName}</h2>
            <img src={booking.image} alt={booking.hotelName} />
           
            <p>City: {booking.city}</p>
            <p>Check-in: {booking.checkIn}</p>
            <p>Check-out: {booking.checkOut}</p>
            <p>Nights: {booking.nights}</p>
            <p>Total: {booking.totalPrice} DH</p>
            <button onClick={()=>cancelBooking(booking.id)}>annuler</button>
    </div>
        ))
       )}
       </div>
    </div>
  )
}

export default MyBookings
