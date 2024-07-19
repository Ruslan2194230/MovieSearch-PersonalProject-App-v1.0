import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/getMovies';

// import { AdditionalInfo } from './MovieDetailsAdditionalInfo/MovieDetailsAdditionalInfoContainer';
import { GoBackLink } from './GoBackLink/GoBackLink';
import { MovieDetailsCard } from './MovieDetailsCard/MovieDetailsCard';
import { AdditionalInfo } from './MovieDetailsAdditionalInfo/MovieDetailsAdditionalInfoContainer';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieById = await getMovieById(movieId);
        setMovie(movieById);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieById();
  }, [movieId]);

  return (
    <>
      <GoBackLink backLinkHref={backLinkHref} />
      <MovieDetailsCard movie={movie}></MovieDetailsCard>

      <AdditionalInfo></AdditionalInfo>
    </>
  );
};

export default MovieDetails;

///
///
///
///
///
