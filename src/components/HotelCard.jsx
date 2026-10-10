import React, { useState } from 'react'
import './HotelCard.css'
import { Link } from 'react-router-dom'
import useFavorites from './hooks/useFavorites'

function HotelCard({hotel}) {
    const {favorites,toggleFavorite} = useFavorites();
    const favorite = favorites.includes(hotel.id);
  return (
    <>
   
    <div className='card'>

        <img className='card-image' src={hotel.image} />
        <h2 className='card-title'>{hotel.name}</h2>
        <p>{hotel.city}</p>
        <p>{hotel.price} MAD / night</p>
        <button className='card-btn' onClick = {()=>{toggleFavorite(hotel.id)}}>
            {favorite ? "❤️" : "♡"}</button>
        <Link 
            to={`/hotels/${hotel.id}`} className="hotel-button">View Details
        </Link>
      
    </div>
    </>
  )
}

export default HotelCard
