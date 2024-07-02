import styled from '@emotion/styled';

export const ItemFilms = styled.li`
  position: relative;
  overflow: hidden;

  max-width: 200px;

  height: 350px;

  padding: 12px;

  border-radius: 25px;
  border: green solid;
`;
export const FilmListimg = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  border-radius: 12px;
`;
export const FilmTitle = styled.h3`
  font-size: 22px;
  margin-right: 25px;
`;
