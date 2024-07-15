import React from 'react';
import { Link } from 'react-router-dom';
import {
  ItemFilms,
  FilmListimg,
  FilmTitle,
  ImgContainer,
} from './FilmItem.module';
import { BASE_POSTER_URL, PLACEHOLDER } from 'utils/constants';

import { AddToFavoriteButton } from 'components/Buttons/AddToFavoriteButton/AddToFavoriteButton';

const FilmItem = ({ movie, location }) => {
  const { id, original_title, poster_path } = movie;

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
          <AddToFavoriteButton id={id} />
        </ImgContainer>
      </Link>
      <FilmTitle>{original_title}</FilmTitle>
    </ItemFilms>
  );
};

export default FilmItem;

///
///
///
///
///
