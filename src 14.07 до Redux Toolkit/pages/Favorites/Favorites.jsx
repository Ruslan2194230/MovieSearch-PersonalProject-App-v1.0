import React, { useEffect, useState } from 'react';
import { useFavorites } from '../../Contexts/FavoriteContext';
import FilmsList from 'components/FilmsList/FilmsList';
import { getFavorites } from 'services/favoritesFilmStorage';
import { getMovieById } from 'services/getMovies';

const Favorites = () => {
  const { removeFromFavoritesAndUpdate, favoriteMoviesId } = useFavorites();
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const favoriteIds = getFavorites();
      const moviePromises = favoriteIds.map(id => getMovieById(id));
      const movies = await Promise.all(moviePromises);
      setFavoriteMovies(movies);
    };

    fetchFavoriteMovies();
  }, [favoriteMoviesId]);

  const handleRemoveFavorite = movieId => {
    console.log('movieId', movieId);
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
