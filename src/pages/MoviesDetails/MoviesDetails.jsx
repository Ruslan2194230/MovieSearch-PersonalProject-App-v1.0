import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/getMovies';
import {
  FilmWrapper,
  FilmTitle,
  FilmDescr,
  GoBackLink,
  FilmSubTitle,
  StyledListDescr,
  AdditionalInfo,
} from './MoviesDetails.module';
import LabTabs from './AdditionalFilmInfoInTabs/AdditionalFilmInfoInTabs';
import { FilmImage } from './FilmImage/FilmImage';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (e) {
        console.log(e);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      <GoBackLink>
        <Link to={backLinkHref}>
          Go back<span>.</span>
        </Link>
      </GoBackLink>
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
      <AdditionalInfo>
        <h2>Additional information</h2>
        <LabTabs></LabTabs>

        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </AdditionalInfo>
    </>
  );
};

export default MoviesDetails;
