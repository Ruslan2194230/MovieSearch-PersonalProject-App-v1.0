import React, { useEffect, useState } from 'react';
import { MovieList } from 'components/MovieList/MovieList';
import { getMovieById } from 'services/getMovies';
import { useSelectFavoriteMovies } from '../../store/favorites/favorites.selectors/favoritesSelectors';

import { getFavorites } from '../../store/favorites/favorites.operations/favoriteMoviesStorage';
import { removeFromFavorites } from '../../store/favorites/favorites.slices/favoritesSlice';

const Favorites = () => {
  const favoriteMovieIds = useSelectFavoriteMovies();

  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const favoriteIds = getFavorites();
      const moviePromises = favoriteIds.map(id => getMovieById(id));
      const movies = await Promise.all(moviePromises);
      setFavoriteMovies(movies);
    };

    fetchFavoriteMovies();
  }, [favoriteMovieIds]);

  const handleRemoveFavorite = movieId => {
    removeFromFavorites(movieId);
    setFavoriteMovies(prevFavoriteMovies =>
      prevFavoriteMovies.filter(
        prevFavoriteMovieId => prevFavoriteMovieId !== movieId
      )
    );
  };

  return (
    <MovieList
      movies={favoriteMovies}
      onRemoveFavorite={handleRemoveFavorite}
    />
  );
};

export default Favorites;
