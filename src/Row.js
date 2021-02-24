import React, {useState,useEffect} from 'react'
import axios from './axios'
import './Row.css'
function Row({title,fetchURL,isLargeRow}) {

    const base_url="https://image.tmdb.org/t/p/original/"
    const [movies,setMovies]=useState([]);
    useEffect(() => {
        async function fetchData(){
            const request=await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])
    console.log(movies)
    return (

            <div className="row">
                

                <h1>{title}</h1>

                <div className="row_posters">
                    {movies.map(movie=>(

                        <img key={movie.id}  className={`row_poster ${isLargeRow && 'row_posterLarge'}`} src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                    
                    ))}
                </div>
                {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>} */}

            </div>

       
    )
}

export default Row
