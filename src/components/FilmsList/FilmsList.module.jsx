// import styled from '@emotion/styled';

// export const ListFilms = styled.ul`
//   /* margin-top: 12px; */
//   display: grid;
//   max-width: calc(100vw - 48px);
//   grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
//   grid-gap: 16px;
//   margin-top: 0;
//   margin-bottom: 0;
//   padding: 16px 0px;
//   list-style: none;
//   margin-left: auto;
//   margin-right: auto;
// `;

import styled from '@emotion/styled';

export const ListFilms = styled.ul`
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
