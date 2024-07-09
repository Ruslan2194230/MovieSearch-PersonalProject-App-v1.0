import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieById } from 'services/getMovies';
import { BASE_POSTER_URL, PLACEHOLDER } from 'utils/constants';
import {
  FilmWrapper,
  StyledList,
  ListItem,
  FilmImg,
  FilmTitle,
  FilmDescr,
  GoBackLink,
  FilmSubTitle,
  StyledListDescr,
  AdditionalInfo,
  ImageWrapper,
} from './MoviesDetails.module';
import { Loader } from 'components/Loader/Loader';
import LabTabs from './AdditionalFilmInfoInTabs/AdditionalFilmInfoInTabs';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const [isLoading, setIsLoading] = useState(true);
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
  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <GoBackLink>
        <Link to={backLinkHref}>
          Go back<span>.</span>
        </Link>
      </GoBackLink>
      <FilmWrapper>
        <ImageWrapper>
          {isLoading && <Loader />}
          <FilmImg
            src={`${
              movie.poster_path
                ? BASE_POSTER_URL + movie.poster_path
                : PLACEHOLDER + '?text=' + movie.original_title
            }`}
            alt="get"
            onLoad={handleImageLoad}
            style={{ display: isLoading ? 'none' : 'block' }}
          />
        </ImageWrapper>
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
        {/* <StyledList>
          <ListItem>
            <NavLink to="cast" state={location.state}>
              Cast<span>.</span>
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink to="reviews" state={location.state}>
              Reviews<span>.</span>
            </NavLink>
          </ListItem>
        </StyledList> */}
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </AdditionalInfo>
    </>
  );
};

export default MoviesDetails;
