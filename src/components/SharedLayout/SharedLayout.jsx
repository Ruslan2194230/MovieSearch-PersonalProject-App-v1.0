import { Suspense } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import {
  Container,
  ContetntContainer,
  NavItem,
  NavList,
  Navigation,
} from './SharedLayout.styled';
import { Loader } from 'components/Loader/Loader';

export const SharedLayout = () => {
  const location = useLocation();
  return (
    <Container>
      <header>
        <Navigation>
          <NavList>
            <NavItem isActive={location.pathname === '/'}>
              <Link to="/">
                Home<span>.</span>
              </Link>
            </NavItem>
            <NavItem isActive={location.pathname === '/movies'}>
              <Link to="/movies">
                Movies<span>.</span>
              </Link>
            </NavItem>
            <NavItem isActive={location.pathname === '/favorites'}>
              <Link to="favorites">
                Favorites<span>.</span>
              </Link>
            </NavItem>
          </NavList>
        </Navigation>
      </header>
      <ContetntContainer>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </ContetntContainer>
    </Container>
  );
};
