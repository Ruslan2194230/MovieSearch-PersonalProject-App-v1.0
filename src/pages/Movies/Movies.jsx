import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/getMovies';

import { useError } from '../../Contexts/ErrorContext';

import Form from 'components/Form/Form';
import FilmsList from 'components/FilmsList/FilmsList';
import { PageNavButtons } from 'components/Buttons/PageNavButtons/PageNavButtons';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const { handleMinorError, handleWarning } = useError();
  let totalPage;
  const handlePageChange = useCallback(
    page => {
      setPage(page);
    },
    [setPage]
  );

  useEffect(() => {
    const currentQuery = searchParams.get('query');
    if (!currentQuery) {
      return;
    }

    const fetchMovieByQuery = async () => {
      try {
        const moviesByQueryResponse = await getMovieByQuery(currentQuery, page);
        const {
          results,
          page: responsePage,
          total_pages,
          total_results,
        } = moviesByQueryResponse;
        if (total_results === 0) {
          handleWarning('Фильм не найден,пожалуйста введите другое название');
          return;
        }
        totalPage = total_pages;

        setPage(responsePage);
        setMovies(results);
      } catch (e) {
        handleMinorError('Failed to fetch movies. Please try again.');
      }
    };
    fetchMovieByQuery();
  }, [searchParams, page]);

  return (
    <>
      <Form setSearchParams={setSearchParams} />

      {movies.length > 0 && <FilmsList movies={movies}></FilmsList>}
      {movies.length > 0 && (
        <PageNavButtons
          movies={movies}
          page={page}
          handlePageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Movies;
