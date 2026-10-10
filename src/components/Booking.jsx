import { useParams } from "react-router-dom";
import hotels from "../data/hotels";
import { useState } from "react";
import "./Booking.css"



function Booking() {
    const {id} = useParams();
    const idHotel = Number(id);
    const [checkIn , setChekIn] = useState("");
    const [checkOut  , setChekOut] = useState("");
    const hotel = hotels.find((hotel)=>hotel.id === idHotel)
    console.log("hotel",hotel)
      if (!hotel) {
        return <h1>Hotel not found!</h1>;
        }
    const nights= checkIn && checkOut ? (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24) : 0;
    const totalPrice = nights > 0 ? nights * hotel.price : 0;

    function handleBooking(){
        if(!checkOut || !checkIn){
            alert("veuillez choisir les dates")
            return
        }
        if (nights <= 0){
            alert("La date de départ doit être après la date d'arrivée !")
            return
        }

        const booking = {
            id : Date.now(),
            hotelId : hotel.id,
            hotelName : hotel.name,
            city:hotel.city,
            price:hotel.price,
            image:hotel.image,
            checkIn,
            checkOut,
            nights,
            totalPrice

        }
        const bookings = JSON.parse(localStorage.getItem("staybookings") || "[]")

        bookings.push(booking);
        localStorage.setItem("staybookings",JSON.stringify(bookings))
        alert("reservation enregister !!")
    }



  return (
  <div className="booking">
    <h1>Booking: {hotel.name}</h1>

    <div className="booking-field">
      <label>Check-in :</label>
      <input
        type="date"
        value={checkIn}
        onChange={(e) => setChekIn(e.target.value)}
      />
    </div>

    <div className="booking-field">
      <label>Check-out :</label>
      <input
        type="date"
        value={checkOut}
        min={checkIn || undefined}
        onChange={(e) => setChekOut(e.target.value)}
      />
    </div>

    <p>Nights: {nights > 0 ? nights : 0}</p>
    <p>Total: {totalPrice} DH</p>

    <button onClick={handleBooking}>
      Confirmer la réservation
    </button>
  </div>
);
}

export default Booking
