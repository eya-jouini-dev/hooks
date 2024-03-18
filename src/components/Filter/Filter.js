import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";
import MoviesList from '../MovieDetails/MoviesList/MoviesList';

function Filter({ratingChange,searchInput}) {
  const[moviesData , setMoviesData]=useState([
    {
        id:Math.random(),
        title:'No Time to Die',
        posterUrl:"https://upload.wikimedia.org/wikipedia/en/f/fe/No_Time_to_Die_poster.jpg",
        rating:5,
        Description:'No Time to Die is 719 on the JustWatch Daily Streaming Charts today. The movie has moved up the charts by 174 places since yesterday. In the United States, it is currently more popular than Terminal but less popular than Playback.'
    },
    {
        id:Math.random(),
        title:'Barbie',
        posterUrl:"https://media1.ledevoir.com/images_galerie/nwd_1512092_1170463/image.jpg",
        rating:3,
        Description:'tarring Margot Robbie as Barbie and Ryan Gosling as Ken, Barbie is available to stream on Max and on sale when you buy it on digital at Prime Video. Those who still can’t get enough of Barbiecore pink — which was noticeably absent at the 96th Academy Awards — can shop the official Barbie: The World Tour book (out April 19) featuring Robbie and stylist Andrew Mukamal’s press tour looks inspired by the Mattel doll.'
    },
    {
        id:Math.random(),
        title:'Infinity war',
        posterUrl:"https://www.contrepoints.org/wp-content/uploads/2018/05/avengers_infinity_war.jpg",
        rating:5,
        Description:'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.'
    },

])
var movieFilter=moviesData.filter((movie,index)=>movie.title.includes(searchInput)&& movie.rating>=ratingChange)
console.log(movieFilter)
  return (
    <div>
   <MoviesList  movieFilter={movieFilter}/>

      
  </div>
  )
}

export default Filter;