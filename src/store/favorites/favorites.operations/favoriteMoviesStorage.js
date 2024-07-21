const FAVORITES_KEY = 'favorites';

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
};

// export const isFavorite = movieId => {
//   const favorites = getFavorites();

//   return favorites.some(FavoriteMovieId => FavoriteMovieId === movieId);
// };

export const addToFavoriteMoviesStorage = movieId => {
  const favorites = getFavorites();
  if (!favorites.includes(movieId)) {
    localStorage.setItem(
      FAVORITES_KEY,
      JSON.stringify([...favorites, movieId])
    );
  }
};

export const removeFromFavoriteMoviesStorage = movieId => {
  const favorites = getFavorites();

  const updatedFavorites = favorites.filter(id => id !== movieId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
};
