import hotels from "../data/hotels";
import useFavorites from "./hooks/useFavorites";
import HotelCard from "./HotelCard";
import "./Favorite.css";

function Favorites() {
  const { favorites } = useFavorites();

  const favoriteHotels = hotels.filter((hotel) =>
    favorites.includes(hotel.id)
  );

  return (
    <div className="favorites-page">
      <h1>My Favorites ❤️</h1>

      {favoriteHotels.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div className="listings">
          {favoriteHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;