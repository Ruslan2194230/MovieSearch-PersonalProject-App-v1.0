import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
// import { FavoriteProvider } from './Contexts/FavoriteContext';
import { Loader } from 'components/Loader/Loader';
import { ErrorProvider } from 'contexts/ErrorContext';
import { Provider } from 'react-redux';
import { persistor, store } from 'store/store';
import { PersistGate } from 'redux-persist/integration/react';

const Home = lazy(() => import('./pages/Home/Home'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('./pages/Movies/Movies'));

const Favorites = lazy(() => import('./pages/Favorites/Favorites'));

export const App = () => (
  <ErrorProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Home />} />
              <Route path="movies" element={<Movies />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="movies/:movieId" element={<MovieDetails />}></Route>
            </Route>
          </Routes>
        </Suspense>
      </PersistGate>
    </Provider>
  </ErrorProvider>
);

///
///
///
