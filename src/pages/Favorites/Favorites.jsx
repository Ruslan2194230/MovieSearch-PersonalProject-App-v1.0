import React, { useEffect } from 'react';
import { useFavorites } from '../../Contexts/FavoriteContext';
import FilmsList from 'components/FilmsList/FilmsList';

const Favorites = () => {
  const { favoriteMovies, removeFromFavoritesAndUpdate } = useFavorites();

  useEffect(() => {}, []);

  const handleRemoveFavorite = movieId => {
    removeFromFavoritesAndUpdate(movieId);
  };

  return (
    <FilmsList
      movies={favoriteMovies}
      onRemoveFavorite={handleRemoveFavorite}
    />
  );
};

export default Favorites;
