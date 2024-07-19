import styled from '@emotion/styled';

export const MovieListUl = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  padding: 16px 0;
  list-style: none;
  margin: 0 auto;
  max-width: calc(100vw - 32px); /* Учитываем отступы */

  @media (max-width: 1440px) {
    /* Показывать по 4 фильма в строку на компах */
    grid-template-columns: repeat(4, 1fr);
  }

  // @media (max-width: 992px) {
  //   /* Показывать по 2 фильма в строку на мобильных устройствах */
  //   grid-template-columns: repeat(2, 1fr);
  // }

  @media (max-width: 1000px) {
    /* Показывать по 2 фильма в строку на планшетах */
    grid-template-columns: repeat(2, minmax(0, 350px));
  }
  @media (max-width: 425px) {
    /* Показывать по 2 фильма в строку на планшетах */
    grid-template-columns: repeat(1, 1fr);
  }
`;
