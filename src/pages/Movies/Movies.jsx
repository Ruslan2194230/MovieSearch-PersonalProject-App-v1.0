import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/getMovies';

import { useError } from '../../Contexts/ErrorContext';

import FilmsList from 'components/FilmsList/FilmsList';
import { PageNavButtons } from 'components/Buttons/PageNavButtons/PageNavButtons';
import Form from './MoviesComponents/Form/Form';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [totalPagesState, setTotalPagesState] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();
  const { handleMinorError, handleWarning } = useError();

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    const currentPage = searchParams.get('page') || '1';

    if (!currentQuery) {
      return;
    }

    if (!searchParams.has('page')) {
      setSearchParams({ query: currentQuery, page: currentPage });
    }

    const fetchMovieByQuery = async () => {
      try {
        const moviesByQueryResponse = await getMovieByQuery(
          currentQuery,
          currentPage
        );
        const { results, total_pages, total_results } = moviesByQueryResponse;
        if (total_results === 0) {
          handleWarning('Фильм не найден, пожалуйста введите другое название');
          return;
        }
        setTotalPagesState(total_pages);
        setMovies(results);
      } catch (e) {
        handleMinorError('Failed to fetch movies. Please try again.');
      }
    };

    fetchMovieByQuery();
  }, [searchParams, setSearchParams, handleWarning, handleMinorError]);

  const handlePageChange = useCallback(
    newPage => {
      setSearchParams(prevParams => ({
        ...Object.fromEntries(prevParams),
        page: newPage.toString(),
      }));
    },
    [setSearchParams]
  );

  return (
    <>
      <Form setSearchParams={setSearchParams} />
      {movies.length > 0 && <FilmsList movies={movies} />}
      {movies.length > 0 && (
        <PageNavButtons
          movies={movies}
          page={Number(searchParams.get('page')) || 1}
          totalPages={totalPagesState}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Movies;

///
///
///
///
///
