import React, { useEffect, useState } from 'react';
import { useFavorites } from '../../Contexts/FavoriteContext';
import FilmsList from 'components/FilmsList/FilmsList';
import { getFavorites } from 'services/favoritesFilmStorage';
import { getMovieById } from 'services/getMovies';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from 'ReduxToolkit/selectors/selectors';
import {
  addToFavorites,
  removeFromFavorites,
} from 'ReduxToolkit/slices/favoritesSlice';

const Favorites = () => {
  // const { removeFromFavoritesAndUpdate, favoriteMoviesId } = useFavorites();
  // const [favoriteMovies, setFavoriteMovies] = useState([]);
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(selectFavorites);

  useEffect(() => {
    const fetchFavoriteMovies = async () => {
      const favoriteIds = getFavorites();
      const moviePromises = favoriteIds.map(id => getMovieById(id));
      const movies = await Promise.all(moviePromises);
      dispatch(addToFavorites(movies));
    };

    fetchFavoriteMovies();
  }, [dispatch]);

  const handleRemoveFavorite = movieId => {
    dispatch(removeFromFavorites(movieId));
  };

  return (
    <FilmsList
      movies={favoriteMovies}
      onRemoveFavorite={handleRemoveFavorite}
    />
  );
};

export default Favorites;

///
///
///
///
///
