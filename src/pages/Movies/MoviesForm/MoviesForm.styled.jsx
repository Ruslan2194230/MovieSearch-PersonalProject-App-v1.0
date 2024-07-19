import styled from '@emotion/styled';

export const InputSearch = styled.input`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  padding: 15px 16px;

  color: rgba(255, 255, 255, 0.2);

  background: #2b2b2b;
  /* box-shadow: 0 0 5px rgba(255, 255, 255, 0.5); */
  border-radius: 10px;

  :active,
  :focus,
  :hover {
    color: white;
  }
`;

export const ButtonSearch = styled.button`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;

  margin-left: 12px;
  padding: 15px 16px;

  color: rgba(255, 255, 255, 0.2);

  background: #2b2b2b;
  border-radius: 10px;
  :not(:disabled),
  :not(:disabled):active,
  :focus,
  :not(:disabled):hover {
    color: white;
    outline: 2px solid #ffc700;
    transition: outline 0.3s ease;
  }
`;
