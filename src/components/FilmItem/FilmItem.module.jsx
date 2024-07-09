// import styled from '@emotion/styled';

// export const ItemFilms = styled.li`
//   position: relative;
//   overflow: hidden;

//   max-width: 200px;

//   height: 350px;

//   padding: 12px;

//   border-radius: 25px;
//   border: green solid;
// `;
// export const FilmListimg = styled.img`
//   width: 100%;
//   height: 260px;
//   object-fit: cover;
//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

//   border-radius: 12px;
// `;
// export const FilmTitle = styled.h3`
//   font-size: 22px;
//   margin-right: 25px;
// `;
import styled from '@emotion/styled';

export const ItemFilms = styled.li`
  position: relative;
  overflow: hidden;
  max-width: 100%; /* Занимает максимально возможную ширину */

  height: auto; /* Высота автоматически подстраивается под содержимое */

  padding: 12px;
  border-radius: 12px;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FilmListimg = styled.img`
  width: 100%; /* Занимает всю доступную ширину контейнера */
  height: auto; /* Подстраивается под соотношение сторон изображения */
  object-fit: cover; /* Заполняет контейнер, сохраняя соотношение сторон */
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const FilmTitle = styled.h3`
  font-size: 16px;
  margin-top: 8px;
`;
