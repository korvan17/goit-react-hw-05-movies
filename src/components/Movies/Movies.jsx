import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { Form } from './Movie.styled';
import { ListOfMovies } from 'components/Home/Home.styled';

export default function Movies() {
  const [inputValue, setInputValue] = useState('');
  const [valueOfSearch, setValueOfSearch] = useState('');
  const [resultOfSearch, setResultOfSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!valueOfSearch && !query) {
      return
    }

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzQwNDk1NjA2YTUxMzQxNzEwYjE2Zjg0NmVjZDE5YSIsInN1YiI6IjY0NzRkN2NiY2MyNzdjMDBiZmExNjkwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.56THA1km1tyO5FAUvfzRha9n0mc8KdOR_ebUIg2WgmY',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${valueOfSearch || query}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then(response => response.json())
      .then(response => setResultOfSearch(response.results))
      .catch(err => console.error(err));
  }, [valueOfSearch, query]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const val = e.target.elements.searchInput.value
    setInputValue('');
    setValueOfSearch(val);
    setSearchParams({query: val})
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <input
          id="searchInput"
          className="searchForm-input"
          type="text"
          autoComplete="off"
          onChange={handleInputChange}
          autoFocus
          value={inputValue} // Привязываем значение поля ввода к состоянию
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </Form>
      <ListOfMovies>
        {resultOfSearch &&
          resultOfSearch.map(movie => {
            const {id, title, name } = movie
            return (
              <li key={movie.id}>
                <Link to={`/movies/${id}`} state={{from: location}}>
                  {title || name}
                </Link>
              </li>
            )
          })}
      </ListOfMovies>
    </div>
  );
}
