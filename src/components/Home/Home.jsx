import { useEffect, useState } from "react"

export default function Home() {

    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() => {
        try {
            const options = {
                method: 'GET',
                headers: {
                  accept: 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzQwNDk1NjA2YTUxMzQxNzEwYjE2Zjg0NmVjZDE5YSIsInN1YiI6IjY0NzRkN2NiY2MyNzdjMDBiZmExNjkwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.56THA1km1tyO5FAUvfzRha9n0mc8KdOR_ebUIg2WgmY'
                }
              };
              
              fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
                .then(response => response.json())
                .then(response => setTrendingMovies(response.results))
                .catch(err => console.error(err));
        } catch (error) {console.log(error)}  
    //     if (!request) {
    //       return;
    //     }
    //     setLoading(true);
    //     try {
    //       fetch(
    //         `https://pixabay.com/api/?q=${request}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    //       )
    //         .then(response => {
    //           if (response.ok) {
    //             return response.json();
    //           }
    //           return Promise.reject(new Error('No answer'));
    //         })
    //         .then(images => {
    //           setPageGallerey(state => [...state, ...images.hits]);
    //           setStation('resolved');
    //         });
    //     } catch (error) {
    //       setErr(error);
    //       setStation('rejected');
    //       console.log('error - ', err)
    //     } finally {
    //       setLoading(false);
    //     }
      }, [setTrendingMovies]);
    
    return (
        <div>
            <ul>
             {trendingMovies && trendingMovies.map(movie => {
             return (
                   <li key={movie.id}>{movie.title || movie.name}</li>
                 )})}
            </ul>
    </div>
    )
}


/*

0
: 
adult:             false
backdrop_path:     "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg"
genre_ids:         (3) [28, 53, 80]
id:                603692
media_type:        "movie"
original_language: "en"
original_title:    "John Wick: Chapter 4"
overview:          "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes."
popularity:        10987.655
poster_path:       "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg"
release_date:      "2023-03-22"
title:             "John Wick: Chapter 4"
video:             false
vote_average:      7.982
vote_count:        2240

*/