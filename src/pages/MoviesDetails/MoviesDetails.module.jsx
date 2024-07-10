import styled from '@emotion/styled';
// import background from '../../images/bg.jpg';

export const GoBackLink = styled.span`
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

export const FilmWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 12px;
  margin-bottom: 12px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
`;

export const FilmTitle = styled.h2`
  font-size: 26px;
  margin-bottom: 12px;
`;

export const FilmSubTitle = styled.h3`
  font-size: 26px;
  margin-bottom: 6px;
`;

export const FilmDescr = styled.p`
  font-size: 24px;
  color: #888888;
  margin-bottom: 12px;
`;

export const StyledListDescr = styled.ul`
  font-size: 22px;
  display: flex;
  gap: 18px;
  padding: 0;
  border-radius: 20px;
  color: #888888;
  margin-bottom: 12px;
`;

export const AdditionalInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 20px;
  border-radius: 10px;
`;

export const StyledList = styled.ul`
  display: flex;
  gap: 18px;
  padding: 14px;
  border-radius: 20px;
`;

export const ListItem = styled.li`
  span {
    color: #ffc700;
  }

  a {
    transition: font-size 0.3s ease;
    color: #fff;
    text-decoration: none;
  }

  a:hover,
  a:focus {
    color: #ffc700;
    span {
      color: white;
    }
  }
`;
