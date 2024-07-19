import { Loader } from 'components/Loader/Loader';
import { FilmImageWrapper, FilmImg } from './MovieDetailsImage.styled';
import { useState } from 'react';
import { BASE_POSTER_URL, PLACEHOLDER } from 'utils/constants';

export const FilmImage = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleImageLoad = () => {
    setIsLoading(false);
  };
  return (
    <FilmImageWrapper>
      {isLoading && <Loader />}
      <FilmImg
        src={`${
          movie.poster_path
            ? BASE_POSTER_URL + movie.poster_path
            : PLACEHOLDER + '?text=' + movie.original_title
        }`}
        alt="get"
        onLoad={handleImageLoad}
        style={{ display: isLoading ? 'none' : 'block' }}
      />
    </FilmImageWrapper>
  );
};
