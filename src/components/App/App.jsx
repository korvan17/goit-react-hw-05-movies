import { Route, Routes } from 'react-router-dom';
import Movies from '../Movies/Movies';
import { StyledLink, NavMenu } from './App.styled';
import Home from 'components/Home/Home';

import MovieDetails from 'components/MovieDetails/MovieDetails';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';

export default function App() {
  return (
    <div>
      <NavMenu>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/movies">Movies</StyledLink>
        </li>
      </NavMenu>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieid" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route />
      </Routes>
    </div>
  );
}
