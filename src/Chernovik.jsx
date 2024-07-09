import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}імі`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab
            label="Item Two"
            id="simple-tab-1"
            aria-controls="simple-tabpanel-1"
          />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
    </Box>
  );
}
/////
////
////
// import * as React from 'react';
// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//     </div>
//   );
// }

// export default function BasicTabs() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <Box sx={{ width: '100%' }}>
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           aria-label="basic tabs example"
//         >
//           <Tab
//             label="Item One"
//             id="simple-tab-0"
//             aria-controls="simple-tabpanel-0"
//           />
//           <Tab
//             label="Item Two"
//             id="simple-tab-1"
//             aria-controls="simple-tabpanel-1"
//           />
//           <Tab
//             label="Item Three"
//             id="simple-tab-2"
//             aria-controls="simple-tabpanel-2"
//           />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0}>
//         Item One
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         Item Two
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//         Item Three
//       </CustomTabPanel>
//     </Box>
//   );
// }

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
//   //   const [hasResults, setHasResults] = useState(true);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const { handleMinorError, handleWarning } = useError();

//   // Устанавливаем начальное значение страницы и синхронизируем с URL
//   useEffect(() => {
//     const currentQuery = searchParams.get('query');
//     const currentPage = searchParams.get('page') || '1';

//     if (!currentQuery) {
//       return;
//     }

//     // Обновляем URL, если значение страницы отсутствует
//     if (!searchParams.has('page')) {
//       setSearchParams({ query: currentQuery, page: currentPage });
//     }

//     const fetchMovieByQuery = async () => {
//       try {
//         const moviesByQueryResponse = await getMovieByQuery(
//           currentQuery,
//           currentPage
//         );
//         const {
//           results,
//           page: responsePage,
//           total_pages,
//           total_results,
//         } = moviesByQueryResponse;
//         if (total_results === 0) {
//           handleWarning('Фильм не найден, пожалуйста введите другое название');
//           setHasResults(false);
//           return;
//         }
//         setTotalPagesState(total_pages);
//         setMovies(results);
//         // setHasResults(true);
//       } catch (e) {
//         handleMinorError('Failed to fetch movies. Please try again.');
//       }
//     };

//     fetchMovieByQuery();
//   }, [searchParams, setSearchParams, handleWarning, handleMinorError]);

//   const handlePageChange = useCallback(
//     newPage => {
//       const currentQuery = searchParams.get('query');

//       setSearchParams({ query: currentQuery, page: newPage.toString() });
//     },
//     [searchParams, setSearchParams]
//   );

//   return (
//     <>
//       <Form setSearchParams={setSearchParams} />
//       {movies.length > 0 && <FilmsList movies={movies} />}
//       {movies.length > 0 && (
//         <PageNavButtons
//           movies={movies}
//           page={Number(searchParams.get('page')) || 1}
//           totalPages={totalPagesState}
//           handlePageChange={handlePageChange}
//         />
//       )}
//     </>
//   );
// };

// export default Movies;

// import { useCallback, useEffect, useState } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import { getMovieByQuery } from 'services/getMovies';

// import { useError } from '../../Contexts/ErrorContext';

// import Form from 'components/Form/Form';
// import FilmsList from 'components/FilmsList/FilmsList';
// import { PageNavButtons } from 'components/Buttons/PageNavButtons/PageNavButtons';

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [totalPagesState, setTotalPagesState] = useState(0);
//   const [hasResults, setHasResults] = useState(true);

//   const [searchParams, setSearchParams] = useSearchParams();
//   const { handleMinorError, handleWarning } = useError();

//   // Устанавливаем начальное значение страницы и синхронизируем с URL
//   useEffect(() => {
//     const currentQuery = searchParams.get('query');
//     const currentPage = searchParams.get('page') || '1';

//     if (!currentQuery) {
//       return;
//     }

//     // Обновляем URL, если значение страницы отсутствует
//     if (!searchParams.has('page')) {
//       setSearchParams({ query: currentQuery, page: currentPage });
//     }

//     const fetchMovieByQuery = async () => {
//       try {
//         const moviesByQueryResponse = await getMovieByQuery(
//           currentQuery,
//           currentPage
//         );
//         const {
//           results,
//           page: responsePage,
//           total_pages,
//           total_results,
//         } = moviesByQueryResponse;
//         if (total_results === 0) {
//           handleWarning('Фильм не найден, пожалуйста введите другое название');
//           setHasResults(false);
//           return;
//         }
//         setTotalPagesState(total_pages);
//         setMovies(results);
//         setHasResults(true);
//       } catch (e) {
//         handleMinorError('Failed to fetch movies. Please try again.');
//       }
//     };

//     fetchMovieByQuery();
//   }, [searchParams, setSearchParams, handleWarning, handleMinorError]);

//   const handlePageChange = useCallback(
//     newPage => {
//       if (hasResults) {
//         setSearchParams(prevParams => ({
//           ...Object.fromEntries(prevParams),
//           page: newPage.toString(),
//         }));
//       }
//     },
//     [setSearchParams, hasResults]
//   );

//   return (
//     <>
//       <Form setSearchParams={setSearchParams} />
//       {movies.length > 0 && <FilmsList movies={movies} />}
//       {movies.length > 0 && (
//         <PageNavButtons
//           movies={movies}
//           page={Number(searchParams.get('page')) || 1}
//           totalPages={totalPagesState}
//           handlePageChange={handlePageChange}
//         />
//       )}
//     </>
//   );
// };

// export default Movies;
