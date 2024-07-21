import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastMovie } from 'services/getMovies';
import { BASE_POSTER_URL, PLACEHOLDER } from 'utils/constants';
import { CastImg, CastSpan, ListItem, StyledList } from './Cast.module';

export const Cast = () => {
  // const location = useLocation();
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const castData = await getCastMovie(movieId);
        setCast(castData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
  }, [movieId]);

  return (
    <>
      {
        <StyledList>
          {cast.map(({ id, profile_path, original_name, character }) => (
            <ListItem key={id}>
              <CastImg
                src={`${
                  profile_path
                    ? BASE_POSTER_URL + profile_path
                    : PLACEHOLDER + '?text=' + original_name
                }`}
                alt={original_name}
              />
              <p>
                <CastSpan> Actor:</CastSpan> {original_name}
              </p>
              <p>
                <CastSpan>Character:</CastSpan> {character}
              </p>
            </ListItem>
          ))}
        </StyledList>
      }
    </>
  );
};
