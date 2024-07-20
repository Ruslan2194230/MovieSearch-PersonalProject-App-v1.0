import {
  FavoriteButton,
  FavoriteIcon,
  FavoriteSvg,
} from './ButtonAddToFavorite.styled';
import { useEffect, useState } from 'react';

import { useFavoriteActions } from 'store/favorites/favorites.actions.hooks/favorites.actions.hooks';
import { useIsFavorite } from 'store/favorites/favorites.selectors/favoritesSelectors';

export const ButtonAddToFavorite = ({ id }) => {
  const { addFavoriteHook, removeFavoriteHook } = useFavoriteActions();
  const isFavoriteMovie = useIsFavorite(id);
  const [isFav, setIsFav] = useState();

  useEffect(() => {
    setIsFav(isFavoriteMovie);
  }, [isFavoriteMovie]);

  const handleFavoriteClick = e => {
    e.stopPropagation();
    e.preventDefault();
    if (isFav) {
      removeFavoriteHook(id);
    } else {
      addFavoriteHook(id);
    }
    setIsFav(!isFav);
  };

  return (
    <FavoriteButton
      onClick={handleFavoriteClick}
      className={isFav ? 'favorite' : ''}
    >
      <FavoriteIcon>
        <FavoriteSvg viewBox="0 0 32 32">
          <path
            d="M26,2H6A1,1,0,0,0,5,3V28a1,1,0,0,0,1.51.86L16,23.17l9.49,5.69A1,1,0,0,0,26,29a1,1,0,0,0,.49-.13A1,1,0,0,0,27,28V3A1,1,0,0,0,26,2ZM25,4V8H7V4ZM16.51,21.14a1,1,0,0,0-1,0L7,26.23V10H25V26.23Z"
            className="cls-1"
          />
        </FavoriteSvg>
      </FavoriteIcon>
    </FavoriteButton>
  );
};

////
///
///
