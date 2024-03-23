import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import MoviesList from '../MovieDetails/MoviesList/MoviesList';

function Filter({ratingChange,searchInput,moviesData }) {
 


 
var movieFilter=moviesData.filter((movie,index)=>movie.title.includes(searchInput)&& movie.rating>=ratingChange)
console.log(movieFilter)
  return (
    <div>
   <MoviesList  movieFilter={movieFilter}/>

      
  </div>
  )
}

export default Filter;