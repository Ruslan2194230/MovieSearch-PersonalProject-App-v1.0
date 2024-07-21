import { useSelector } from 'react-redux';

export const useSelectFavoriteMovies = () =>
  useSelector(state => state.favoritesStoreReducer.favoriteMoviesid);

export const useIsFavorite = movieId => {
  const favoriteMovies = useSelectFavoriteMovies();
  // console.log('favoriteMovies in useIsFavorite', favoriteMovies);
  return favoriteMovies.includes(movieId);
};
