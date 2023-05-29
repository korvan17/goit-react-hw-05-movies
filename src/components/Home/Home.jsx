import { useEffect } from "react"

export default function Home() {

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMzQwNDk1NjA2YTUxMzQxNzEwYjE2Zjg0NmVjZDE5YSIsInN1YiI6IjY0NzRkN2NiY2MyNzdjMDBiZmExNjkwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.56THA1km1tyO5FAUvfzRha9n0mc8KdOR_ebUIg2WgmY'
            }
          };
          
          fetch('https://developers.themoviedb.org/3/trending/get-trending', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
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
      }, []);

    return (<>List of movies in trend</>)
}