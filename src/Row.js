import React, {useState,useEffect,useRef} from 'react'
import axios from './axios'
import './Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer';
import {TimelineLite ,TweenMax, Power3,TimelineMax} from 'gsap';
import ScrollMagic from 'scrollmagic'

function Row({title,fetchURL,isLargeRow}) {
    let images = useRef(null)
    let app = useRef(null)
    // let tl = new TimelineLite();
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
    let tl = new TimelineMax();
    let t2 = new TimelineMax();
    useEffect(() => {
        // TweenMax.to(app, 0, {css: {visibility: 'visible'}})
        tl.to(app,1.5,{scale:1,ease:Power3.easeOut});
       
        const controller = new ScrollMagic.Controller();
        t2.to(images,1.5,{scale:1,ease:Power3.easeOut},"=1.5");
        
    }, [])

    return (

            <div className="row">


                <h1 ref={el=>{app=el}}>{title}</h1>
                
                <div className="row_posters" ref={el=>{images=el}}>
                    {movies.map(movie=>(

                        <img  key={movie.id} onClick={()=>handleClick(movie)} className={`row_poster ${isLargeRow && 'row_posterLarge'}`} src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                    
                    ))}
                </div>
                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}

            </div>

       
    )
}

export default Row
