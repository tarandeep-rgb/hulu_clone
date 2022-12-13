import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import './Result.css'
import axios from './axios';
import FlipMove from 'react-flip-move';

function Result({selectedOption}) {

    const [movies,setMovies]=useState([]);

    useEffect(()=>{
        async function fetchData () {
            const request=await axios.get(selectedOption); //getting the request (selected option) from the navbar to get that particular type of movies.
            // console.log("data:::::::::::::::::::",request.data.results);
            setMovies(request.data.results);
            return request; //jump out of the async function
        }

        fetchData();
    },[selectedOption])


  return (
    <div className='result'>
        <FlipMove>
        {movies.map((movie)=>(
            <VideoCard key={movie.id} movie={movie}/>
        ))}
        </FlipMove>
       
    </div>
  );
}

export default Result