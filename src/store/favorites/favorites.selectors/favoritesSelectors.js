import { useSelector } from 'react-redux';

export const useSelectFavoriteMovies = () =>
  useSelector(state => state.favoritesStoreReducer);

export const useIsFavorite = movieId => {
  const favoriteMovies = useSelectFavoriteMovies();
  return favoriteMovies.includes(movieId);
};
