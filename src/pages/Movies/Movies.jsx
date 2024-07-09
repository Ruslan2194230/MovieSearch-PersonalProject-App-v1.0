import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/getMovies';

import { useError } from '../../Contexts/ErrorContext';

import Form from 'components/Form/Form';
import FilmsList from 'components/FilmsList/FilmsList';
import { PageNavButtons } from 'components/Buttons/PageNavButtons/PageNavButtons';

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

////До моих попыток сделать page через URL 14:41
////
// import { useCallback, useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { getMovieByQuery } from 'services/getMovies';

// import { useError } from '../../Contexts/ErrorContext';

// import Form from 'components/Form/Form';
// import FilmsList from 'components/FilmsList/FilmsList';
// import { PageNavButtons } from 'components/Buttons/PageNavButtons/PageNavButtons';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPagesState, setTotalPagesState] = useState(0);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const { handleMinorError, handleWarning } = useError();
//   const handlePageChange = useCallback(
//     page => {
//       setPage(page);
//     },
//     [setPage]
//   );

//   useEffect(() => {
//     const currentQuery = searchParams.get('query');

//     const cuurentPage = searchParams.get('page');
//     if (!currentQuery) {
//       return;
//     }

//     const fetchMovieByQuery = async () => {
//       try {
//         const moviesByQueryResponse = await getMovieByQuery(currentQuery, page);
//         const {
//           results,
//           page: responsePage,
//           total_pages,
//           total_results,
//         } = moviesByQueryResponse;
//         if (total_results === 0) {
//           handleWarning('Фильм не найден,пожалуйста введите другое название');
//           return;
//         }
//         setTotalPagesState(total_pages);
//         // console.log('totalPagesState', totalPagesState);

//         setPage(responsePage);
//         setMovies(results);
//       } catch (e) {
//         handleMinorError('Failed to fetch movies. Please try again.');
//       }
//     };
//     fetchMovieByQuery();
//   }, [searchParams, page]);

//   return (
//     <>
//       <Form setSearchParams={setSearchParams} />

//       {movies.length > 0 && <FilmsList movies={movies}></FilmsList>}
//       {movies.length > 0 && (
//         <PageNavButtons
//           movies={movies}
//           page={page}
//           totalPages={totalPagesState}
//           handlePageChange={handlePageChange}
//         />
//       )}
//     </>
//   );
// };

// export default Movies;
