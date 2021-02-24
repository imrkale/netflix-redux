import React, {useState,useEffect} from 'react'
import axios from './axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer';

function Row({title,fetchURL,isLargeRow}) {

    const base_url="https://image.tmdb.org/t/p/original/";
    const [trailerUrl,setTrailerUrl]=useState("");
    const [movies,setMovies]=useState([]);
    useEffect(() => {
        async function fetchData(){
            const request=await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchURL])


    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const handleClick=(movie)=>{
        console.log(movie)
        if(trailerUrl)
        {
            setTrailerUrl("");
        }
        else{
            movieTrailer(movie?.name||"")
            .then(url=>{
                const urlParams=new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            }).catch((error)=>console.log(error));
            console.log(trailerUrl)
        }
    }


    return (

            <div className="row">


                <h1>{title}</h1>

                <div className="row_posters">
                    {movies.map(movie=>(

                        <img key={movie.id} onClick={()=>handleClick(movie)} className={`row_poster ${isLargeRow && 'row_posterLarge'}`} src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                    
                    ))}
                </div>
                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}

            </div>

       
    )
}

export default Row
