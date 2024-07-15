import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { FavoriteProvider } from './Contexts/FavoriteContext';
import { Loader } from 'components/Loader/Loader';
import { ErrorProvider } from 'Contexts/ErrorContext';
import { Provider } from 'react-redux';
import { store } from 'ReduxToolkit/store/store';

const Home = lazy(() => import('./pages/Home/Home'));
const MoviesDetails = lazy(() => import('./pages/MoviesDetails/MoviesDetails'));
const Movies = lazy(() => import('./pages/Movies/Movies'));

const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

export const App = () => (
  <ErrorProvider>
    <Provider store={store}>
      <FavoriteProvider>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="movies/:movieId" element={<MoviesDetails />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </FavoriteProvider>
    </Provider>
  </ErrorProvider>
);

///
///
///
