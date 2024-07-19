import styled from '@emotion/styled';

export const MovieItemLi = styled.li`
  position: relative;
  overflow: hidden;
  max-width: 100%;

  height: auto;

  padding: 12px;
  border-radius: 12px;
  border: 1.5px solid green;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
export const MovieImgContainer = styled.div`
  position: relative;
`;

export const MovieListimg = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const MovieTitle = styled.h3`
  font-size: 16px;
  margin-top: 8px;
`;
