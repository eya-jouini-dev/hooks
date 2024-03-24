import React from 'react'
import { useParams } from 'react-router-dom';

function MovieDetailss({moviesData}) {
    const {movieId}=useParams();
    const findmovie = moviesData.find((movie , index)=> movie.id==movieId);
  
   
  return (
  <div>
  <h1>{findmovie.title}</h1>
  <p>{findmovie.Description}</p>
  <img src={findmovie.posterUrl}/>
  <p>Ratings: {findmovie.rating}</p>
  <iframe width="560" height="315" src={findmovie.Trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

    
    
    
    </div>
  )
}

export default MovieDetailss;