import styled from '@emotion/styled';

export const GoBackLinkSpan = styled.span`
  a {
    position: relative;
    padding-left: 12px;
    text-decoration: none;
    color: #fff;
  }

  a::before {
    content: '';
    display: block;

    border-color: #ffc700;
    border-style: solid;
    border-width: 0 0 2px 2px;
    height: 6px;
    left: 0;
    position: absolute;
    width: 6px;
    margin-top: -4px;
    top: 50%;

    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  :hover,
  :focus {
    color: #ffc700;
    a::before {
      border-color: white;
    }
    span {
      color: white;
    }
  }
`;
