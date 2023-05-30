import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { AddInfo, ButtonBack, InfoMovie, Poster } from './MovieDetails.styled';

export default function MovieDetails() {
  const { movieid } = useParams();
  console.log(movieid);
  const [movieDetail, setMovieDetail] = useState();
  const location = useLocation();
  const linkLocationRef = useRef(location.state?.from ?? '/movies')
  //   const placeholder = 'https://www.themoviedb.org/assets/2/apple-touch-icon-cfba7699efe7a742de25c28e08c38525f19381d31087c69e89d6bcb8e3c0ddfa.png'

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzQwNDk1NjA2YTUxMzQxNzEwYjE2Zjg0NmVjZDE5YSIsInN1YiI6IjY0NzRkN2NiY2MyNzdjMDBiZmExNjkwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.56THA1km1tyO5FAUvfzRha9n0mc8KdOR_ebUIg2WgmY',
      },
    };

    try {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieid}?language=en-US`,
        options
      )
        .then(response => response.json())
        .then(response => {
          console.log(response);
          setMovieDetail(response);
        })
        .catch(err => console.error(err));
    } catch (error) {
      console.log(error);
    }
  }, [movieid]);

  return (
    <div>
      {movieDetail && (
        <InfoMovie>
          <div>
            <ButtonBack to={linkLocationRef.current}>
              Go back
            </ButtonBack>
            <Poster
              src={`https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`}
              alt="posterOfMovie"
              width='300'
            />
          </div>
          <div>
            <h2>{movieDetail.title}</h2>
            <p>User Score: {Math.round(movieDetail.vote_average * 10)}% </p>
            <h3>Overview</h3>
            <p>{movieDetail.overview}</p>
            <h4>Geners</h4>
            <p> {movieDetail.genres.map(gener => gener.name + ' ')}</p>
          </div>
        </InfoMovie>
      )}
      <AddInfo>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </AddInfo>

      <Outlet />
    </div>
  );
}
