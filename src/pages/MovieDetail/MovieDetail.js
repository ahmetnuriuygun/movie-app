import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./MovieDetail.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const MovieDetail = () => {
  const navigate = useNavigate()
  const{id} = useParams()
  const[MovieDetails,setMovieDetails]=useState([])

  const API_KEY = "c41218dbaf0996b087fc418d8a4a02a8"
  const urlofDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`

  const baseImageUrl = "https://image.tmdb.org/t/p/w1280";
  const defaultImage =
    "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";


  const getDetailsData = async () =>{
    const detail = await axios.get(urlofDetails)
    setMovieDetails(detail.data)
  }

  useEffect(()=>{
    getDetailsData()
  },[urlofDetails])

console.log(MovieDetails);
const {
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
  vote_count,
} = MovieDetails;
  return (
    <div className='info'>
        <h1>{title}</h1>
        <div className='d-flex mt-4'>
        <img src={poster_path ? baseImageUrl + poster_path : defaultImage} alt="" />
        
        <div className="text">
          <p>{overview}</p>
        <p> 
          <span className='text-danger'>Release Date:</span>
          <span>{release_date}</span>
        </p>
        <p>
          <span className='text-danger'>Vote:</span>
          <span>{vote_average}</span>
        </p>

        <p>
          <span className='text-danger'>Total Rate:</span>
          <span>{vote_count}</span> 
        </p>
        
        <button className='btn btn-info' onClick={()=>navigate(-1)} >Go Back</button>
        </div>

        
        </div>

        
        
    </div>
  )
}

export default MovieDetail