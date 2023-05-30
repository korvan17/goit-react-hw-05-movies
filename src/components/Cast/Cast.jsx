import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function Cast() {
    const { movieid } = useParams();

    const [castOfMovie, setCastOfMovie] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzQwNDk1NjA2YTUxMzQxNzEwYjE2Zjg0NmVjZDE5YSIsInN1YiI6IjY0NzRkN2NiY2MyNzdjMDBiZmExNjkwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.56THA1km1tyO5FAUvfzRha9n0mc8KdOR_ebUIg2WgmY'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${movieid}/credits?language=en-US`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response.cast)
                setCastOfMovie(response.cast)})
            .catch(err => console.error(err));
    }, [])

    return <ul>
        
        {castOfMovie && castOfMovie.map(actor => {
            const {profile_path, name, character} = actor
           return ( <li key={actor.id}>
                <img src={`https://image.tmdb.org/t/p/w200/${profile_path}`} alt="photoActor" />
                <p>{name}</p>
                <p>{character}</p>
            </li>)
        })}

    </ul>
}