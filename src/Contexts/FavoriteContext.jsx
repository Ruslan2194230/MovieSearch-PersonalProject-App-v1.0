import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  getFavorites,
  removeFromFavorites,
  addToFavorites,
} from '../services/favoritesFilmStorage';

const FavoriteContext = createContext();

export const useFavorites = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favoriteMoviesId, setFavoriteMoviesId] = useState([]);

  useEffect(() => {
    const favoriteIds = getFavorites();
    setFavoriteMoviesId(favoriteIds);
  }, []);

  const removeFromFavoritesAndUpdate = async movieId => {
    removeFromFavorites(movieId);
    setFavoriteMoviesId(prevFavoriteMoviesId =>
      prevFavoriteMoviesId.filter(
        prevFavoriteMovieId => prevFavoriteMovieId !== movieId
      )
    );
  };

  const isFavorite = movieId => {
    return favoriteMoviesId.some(FavoriteMovie => FavoriteMovie === movieId);
  };

  const addToFavoritesAndUpdate = async movieId => {
    addToFavorites(movieId);

    setFavoriteMoviesId(prevFavoriteMoviesId => [
      ...prevFavoriteMoviesId,
      movieId,
    ]);
  };

  return (
    <FavoriteContext.Provider
      value={{
        favoriteMoviesId,
        removeFromFavoritesAndUpdate,
        isFavorite,
        addToFavoritesAndUpdate,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

///До моих действий переноса получения масива фильмов в
////
///
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import {
//   getFavorites,
//   removeFromFavorites,
//   addToFavorites,
// } from '../services/favoritesFilmStorage';
// import { getMovieById } from '../services/getMovies';

// const FavoriteContext = createContext();

// export const useFavorites = () => useContext(FavoriteContext);

// export const FavoriteProvider = ({ children }) => {
//   const [favoriteMovies, setFavoriteMovies] = useState([]);

//   // Загрузка избранных фильмов при монтировании компонента
//   useEffect(() => {
//     const fetchFavoriteMovies = async () => {
//       const favoriteIds = getFavorites();
//       const moviePromises = favoriteIds.map(id => getMovieById(id));
//       const movies = await Promise.all(moviePromises);
//       setFavoriteMovies(movies);
//     };

//     fetchFavoriteMovies();
//   }, []);

//   const removeFromFavoritesAndUpdate = async movieId => {
//     removeFromFavorites(movieId);
//     setFavoriteMovies(prevFavoriteMovies =>
//       prevFavoriteMovies.filter(movie => movie.id !== movieId)
//     );
//   };

//   const isFavorite = movieId => {
//     return favoriteMovies.some(movie => movie.id === movieId);
//   };

//   const addToFavoritesAndUpdate = async movieId => {
//     addToFavorites(movieId);
//     const movie = await getMovieById(movieId);
//     setFavoriteMovies(prevFavoriteMovies => [...prevFavoriteMovies, movie]);
//   };

//   return (
//     <FavoriteContext.Provider
//       value={{
//         favoriteMovies,
//         removeFromFavoritesAndUpdate,
//         isFavorite,
//         addToFavoritesAndUpdate,
//       }}
//     >
//       {children}
//     </FavoriteContext.Provider>
//   );
// };
