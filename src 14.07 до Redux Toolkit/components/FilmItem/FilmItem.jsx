import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ItemFilms, FilmListimg, FilmTitle } from './FilmItem.module';
import { BASE_POSTER_URL, PLACEHOLDER } from 'utils/constants';

import { useFavorites } from '../../Contexts/FavoriteContext';
import {
  FavoriteButton,
  FavoriteIcon,
  ImgContainer,
} from '../Buttons/AddToFavoriteButton/AddToFavoriteButton.module';

const FilmItem = ({ movie, location }) => {
  const { id, original_title, poster_path } = movie;
  const { isFavorite, addToFavoritesAndUpdate, removeFromFavoritesAndUpdate } =
    useFavorites();
  const [isFav, setIsFav] = useState(isFavorite(id));
  // console.log('isFav', isFav);

  useEffect(() => {
    setIsFav(isFavorite(id));
  }, [id, isFavorite]);

  const handleFavoriteClick = e => {
    e.stopPropagation();
    e.preventDefault();
    if (isFav) {
      removeFromFavoritesAndUpdate(id);
    } else {
      addToFavoritesAndUpdate(id);
    }
    setIsFav(!isFav);
  };

  return (
    <ItemFilms key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <ImgContainer>
          <FilmListimg
            src={
              poster_path
                ? BASE_POSTER_URL + poster_path
                : PLACEHOLDER + '?text=' + original_title
            }
            alt={original_title}
          />
          <FavoriteButton
            onClick={handleFavoriteClick}
            className={isFav ? 'favorite' : ''}
          >
            <FavoriteIcon>
              <svg viewBox="0 0 32 32">
                <path
                  d="M26,2H6A1,1,0,0,0,5,3V28a1,1,0,0,0,1.51.86L16,23.17l9.49,5.69A1,1,0,0,0,26,29a1,1,0,0,0,.49-.13A1,1,0,0,0,27,28V3A1,1,0,0,0,26,2ZM25,4V8H7V4ZM16.51,21.14a1,1,0,0,0-1,0L7,26.23V10H25V26.23Z"
                  className="cls-1"
                />
              </svg>
            </FavoriteIcon>
          </FavoriteButton>
        </ImgContainer>
      </Link>
      <FilmTitle>{original_title}</FilmTitle>
    </ItemFilms>
  );
};

export default FilmItem;
