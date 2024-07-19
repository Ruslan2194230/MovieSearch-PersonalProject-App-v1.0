import { useLocation } from 'react-router-dom';
import { MovieListUl } from './MovieList.module';
import { MovieItem } from './MovieItem/MovieItem';

export const MovieList = ({ movies, onRemoveFavorite }) => {
  const location = useLocation();

  return (
    <MovieListUl>
      {movies.map(movie => (
        <MovieItem
          key={movie.id}
          movie={movie}
          location={location}
          onRemoveFavorite={onRemoveFavorite}
        />
      ))}
    </MovieListUl>
  );
};
