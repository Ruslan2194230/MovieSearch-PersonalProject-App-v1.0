import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { FavoriteProvider } from './Contexts/FavoriteContext';
import { Loader } from 'components/Loader/Loader';
import { ErrorProvider } from 'Contexts/ErrorContext';

const Home = lazy(() => import('./pages/Home/Home'));
const MoviesDetails = lazy(() => import('./pages/MoviesDetails/MoviesDetails'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const Cast = lazy(() =>
  import(
    './pages/MoviesDetails/AdditionalInfo/AdditionalFilmInfoInTabs/AdditionalFilmInfoComponents/Cast/Cast'
  )
);
const Reviews = lazy(() =>
  import(
    './pages/MoviesDetails/AdditionalInfo/AdditionalFilmInfoInTabs/AdditionalFilmInfoComponents/Reviews/Reviews'
  )
);
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

export const App = () => {
  return (
    <ErrorProvider>
      <FavoriteProvider>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="movies/:movieId" element={<MoviesDetails />}>
                <Route path="cast" element={<Cast />} />
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Routes>
        </Suspense>
      </FavoriteProvider>
    </ErrorProvider>
  );
};
