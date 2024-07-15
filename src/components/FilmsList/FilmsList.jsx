import { useLocation } from 'react-router-dom';
import { ListFilms } from './FilmsList.module';

import FilmItem from '../FilmItem/FilmItem';
const FilmsList = ({ movies, onRemoveFavorite }) => {
  const location = useLocation();

  return (
    <ListFilms>
      {movies.map(movie => (
        <FilmItem
          key={movie.id}
          movie={movie}
          location={location}
          onRemoveFavorite={onRemoveFavorite}
        />
      ))}
    </ListFilms>
  );
};

export default FilmsList;

///
///
///
///
///
