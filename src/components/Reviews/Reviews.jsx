import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

export default function Reviews() {
    const { movieid } = useParams();
    const [review, setReview] = useState([])

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzQwNDk1NjA2YTUxMzQxNzEwYjE2Zjg0NmVjZDE5YSIsInN1YiI6IjY0NzRkN2NiY2MyNzdjMDBiZmExNjkwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.56THA1km1tyO5FAUvfzRha9n0mc8KdOR_ebUIg2WgmY'
            }
          };
          
          fetch(`https://api.themoviedb.org/3/movie/${movieid}/reviews?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => {console.log(response)
                setReview(response)
            })
            .catch(err => console.error(err));

    }, [movieid])

    console.log(review)

    return <div>Reviews</div>
}