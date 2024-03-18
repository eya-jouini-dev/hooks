import React from 'react';
import ReactStars from "react-rating-stars-component";
import Moviecars from '../../Moviecars/Moviecars';
import './movi.css'

function MoviesList( {movieFilter}) {
  return (
   <div className='eya'>
   {movieFilter.map((movie ,index) => {
        return <Moviecars movie={movie}/>;
    
   })}
   </div>
  );
};

export default MoviesList;