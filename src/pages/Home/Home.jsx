import { useEffect, useState } from 'react';

import { getTrendingMovies } from 'services/getMovies';

import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies('').then(setMovies);
  }, []);
  return (
    <>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
};

export default Home;
