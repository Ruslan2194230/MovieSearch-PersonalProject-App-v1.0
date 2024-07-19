import styled from '@emotion/styled';

export const FavoriteButton = styled.button`
  position: absolute;
  bottom: -30px;
  right: 0;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-top: 10px;

  &.favorite svg path {
    fill: #ffc700;
    stroke: #ffc700;
  }

  &:not(.favorite) svg path {
    fill: green;
    stroke: green;
  }
`;

export const FavoriteIcon = styled.span`
  width: 24px;
  height: 24px;

  // svg {
  //   width: 24px;
  //   height: 24px;
  // }
`;
export const FavoriteSvg = styled.svg`
  width: 24px;
  height: 24px;
`;
