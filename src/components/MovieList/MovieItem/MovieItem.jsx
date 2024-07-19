import React from 'react';
import { Link } from 'react-router-dom';
import {
  MovieItemLi,
  MovieListimg,
  MovieTitle,
  MovieImgContainer,
} from './MovieItem.styled';
import { BASE_POSTER_URL, PLACEHOLDER } from 'utils/constants';
import { ButtonAddToFavorite } from 'components/Buttons/ButtonAddToFavorite/ButtonAddToFavorite';

export const MovieItem = ({ movie, location }) => {
  const { id, original_title, poster_path } = movie;

  return (
    <MovieItemLi key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        <MovieImgContainer>
          <MovieListimg
            src={
              poster_path
                ? BASE_POSTER_URL + poster_path
                : PLACEHOLDER + '?text=' + original_title
            }
            alt={original_title}
          />
          <ButtonAddToFavorite id={id} />
        </MovieImgContainer>
      </Link>
      <MovieTitle>{original_title}</MovieTitle>
    </MovieItemLi>
  );
};

// export default MovieItem;
