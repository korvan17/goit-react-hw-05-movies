import { NavLink, Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export default function App() {
  return (
    <div>
      <nav>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </nav>
      <Routes>
        <Route path="/" element={<>Домашняя страница</>} />
        <Route path="/movies" element={<Movies />} />
        <Route />
      </Routes>
    </div>
  );
}
