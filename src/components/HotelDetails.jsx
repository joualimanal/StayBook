import { useParams ,Link} from "react-router-dom";
import useFavorites from "./hooks/useFavorites";
import hotels from "../data/hotels";
import  Navbar from "./Navbar"
import "./HotelDetails.css"

function HotelDetails() {
    const {id}=useParams()
    const hotelId = Number(id)
    const hotel = hotels.find((hotel)=>hotel.id === hotelId)
    const { favorites, toggleFavorite } = useFavorites();

    const favorite = favorites.includes(hotelId);
    if (!hotel) {
    return <h1>Hotel not found</h1>;
  }
  return (
    <>
    
  <div className="details-page">
    <div className="details-card">

      <img className="details-image" src={hotel.image}/>

      <div className="details-content">

        <h1>{hotel.name}</h1>

        <p className="details-city">
         {hotel.city}
        </p>

        <p className="details-price">
          {hotel.price} DH <span>/ night</span>
        </p>

        <p className="details-description">
          Discover a beautiful stay in {hotel.city}.
          Enjoy comfort, quality service and a memorable experience.
        </p>

        <div className="details-actions">
          <button className="favorite-btn" onClick={()=>toggleFavorite(hotelId)}>
           {favorite ?   "❤️ Favorite" :"♡ Favorite"}
          </button>

          <Link to={`/booking/${hotel.id}`}  className="book-btn">
            Book Now
          </Link>
        </div>

      </div>

    </div>
  </div>
  </>
);


}

export default HotelDetails
