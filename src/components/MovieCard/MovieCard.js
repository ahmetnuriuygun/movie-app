import React, { useEffect, useState } from 'react'
import axios from "axios"
import {Card, Row, Col, Container } from "react-bootstrap";
import "./MovieCard.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';



const MovieCard = () => {

const navigate = useNavigate()
const [data,setData] = useState([])
const [query,setQuery] = useState("")

// console.log(query);

const API_KEY = "c41218dbaf0996b087fc418d8a4a02a8"

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1581905764498-f1b60bae941a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80";

const urlofLastMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

const getData = async (url) =>{
    
    const movies = await axios.get(url);
    setData(movies.data.results);
}
useEffect(()=>{
    getData(urlofLastMovies)
},[])


const urlofSearchedMovies= `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;
const handleSubmit = (e) =>{
    e.preventDefault()
    getData(urlofSearchedMovies + query)
    
}

// console.log(data);
  return (
    <div>


<div>
        <div>
        <div className='searchdiv'>
            <div className='center'>
            <form onSubmit={handleSubmit}>
                <input className='input' type="search" placeholder='Search a movie...' onChange={(e)=>setQuery(e.target.value)} />
                <button type="submit" className='search' >Search</button>
            </form>
                
            </div>
        </div>
    </div>
    </div>





        <Container className="text-center mt-4 p-4" >
            <Row className='d-flex justify-content-center'>
                {data.map((item)=>{
                    return(
                        <Col className='d-flex justify-content-center mb-4 '
                        sm={12}
                        md={6}
                        lg={4}
                        >
                            <Card  className="cards" onClick={()=>navigate("/details/" + item.id)}>
                            <Card.Img  className="movieimg" src={item.poster_path ? IMG_API + item.poster_path : defaultImage} variant="top" />  
                            <Card.Body className='bg-primary'>
                                <Card.Title className='text-white font-weight-bold'>{item.original_title}</Card.Title>
                                <Card.Text className="card-over">
                                <h3>Overview</h3>
                                <p>{item.overview}</p>
                                </Card.Text>
                            </Card.Body>

                            </Card>
                       </Col>
                   );
               })}
           </Row>
       </Container>



    </div>
  )
}

export default MovieCard