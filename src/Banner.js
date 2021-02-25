import React,{useEffect,useState,useRef} from 'react'
import './Banner.css'
import requests from './requests.js'
import axios from './axios'
import {TimelineLite ,TweenMax, Power3} from 'gsap';
import ScrollMagic from 'scrollmagic'
function Banner() {
    let title = useRef(null)
    let desc = useRef(null)
    let tl = new TimelineLite();
    const [movies,setMovies]=useState([]);
    useEffect(() => {
        tl.from(title,1.5,{x:50,ease:Power3.easeOut,delay:0.5});
        tl.from(desc, 1, {
            y: 44,
            ease:Power3.easeOut,
          },0.5, 'Start')
         
    }, [])
    useEffect(() => {

        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals);
            console.log(request)
            setMovies(
                request.data.results[Math.floor(Math.random()*request.data.results.length)]
            );
            return request;
        }
      fetchData();
    }, [])

    function truncate(str,n)
    {
        return str?.length>n?str.substr(0,n-1)+".....":str;
    }

    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage:`url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
            backgroundPosition:"center center"}}>


            <div className="banner_contents">
                <h1 ref={el=>{title=el}} className="banner_title">{movies?.title||movies?.name||movies?.original_name}</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My List</button>
                </div>
                <h1 ref={el=>{desc=el}} className="banner_description">
                    {truncate(movies?.overview,150)}
                </h1>
            </div>
            <div className="banner_fadeBottom"/>
    

        </header>
    )
}

export default Banner
