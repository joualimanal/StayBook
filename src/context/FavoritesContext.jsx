
import { createContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(
      localStorage.getItem("staybook_favorites") || "[]"
    );
  });

  function toggleFavorite(hotelId) {
    const updatedFavorites = favorites.includes(hotelId)
      ? favorites.filter((id) => id !== hotelId)
      : [...favorites, hotelId];

    setFavorites(updatedFavorites);

    localStorage.setItem(
      "staybook_favorites",
      JSON.stringify(updatedFavorites)
    );
  }

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;