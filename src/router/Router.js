import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MovieCard from '../components/MovieCard/MovieCard'
import Navbar from '../components/Navbar/Navbar'
import Login from '../pages/Login/Login'
import Main from '../pages/Main/Main'
import MovieDetail from '../pages/MovieDetail/MovieDetail'
import Register from '../pages/Register/Register'

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Navbar/>
            
            
           <Routes>
               <Route exact path="/" element={<Main/>}/> 
               <Route path="/login" element={<Login/>}/> 
               <Route path="/register" element={<Register/>}/> 
               <Route path="/details/:id" element={<MovieDetail/>}/> 
           </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router