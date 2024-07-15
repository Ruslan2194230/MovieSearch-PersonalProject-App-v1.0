import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/getMovies';

import { AdditionalInfo } from './AdditionalInfo/AdditionalInfo';
import { GoBackLink } from './GoBackLink/GoBackLink';
import { MoviesDetailsCard } from './MoviesDetailsCard/MoviesDetailsCard';

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
      <GoBackLink backLinkHref={backLinkHref} />
      <MoviesDetailsCard movie={movie}></MoviesDetailsCard>

      <AdditionalInfo></AdditionalInfo>
    </>
  );
};

export default MoviesDetails;

///
///
///
///
///
