import styled from '@emotion/styled';
import background from '../../images/bg.jpg';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-image: url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -1;
`;
export const Navigation = styled.nav`
  margin-bottom: 24px;
`;
export const NavList = styled.ul`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;

  display: flex;
  gap: 18px;
  padding: 14px;

  background: rgba(255, 255, 255, 0.1);
  background-blend-mode: overlay;
  backdrop-filter: blur(50px);
  border-radius: 20px;
`;

export const NavItem = styled.li`
  span {
    color: ${props => (props.isActive ? 'white' : '#ffc700')};
  }

  a {
    text-decoration: none;
    color: ${props => (props.isActive ? '#ffc700' : 'inherit')};
  }

  a:hover,
  a:focus {
    color: #ffc700;
    span {
      color: white;
    }
  }
`;
export const ContetntContainer = styled.div`
  padding: 0px 50px;
`;
