import { FilmImage } from '../MovieDetailsImage/MovieDetailsImage';
import {
  FilmWrapper,
  FilmTitle,
  FilmDescr,
  FilmSubTitle,
  StyledListDescr,
} from './MovieDetailsCard.module';

export const MovieDetailsCard = ({ movie }) => {
  return (
    <FilmWrapper>
      <FilmImage movie={movie} />

      <div>
        <FilmTitle>{movie.original_title}</FilmTitle>
        <FilmSubTitle>Rating: {Math.round(movie.vote_average)}</FilmSubTitle>
        <FilmSubTitle>Overview</FilmSubTitle>
        <FilmDescr>{movie.overview}</FilmDescr>
        <FilmSubTitle>Genres</FilmSubTitle>
        <StyledListDescr>
          {movie.genres?.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </StyledListDescr>
      </div>
    </FilmWrapper>
  );
};

///
///
///
///
///
