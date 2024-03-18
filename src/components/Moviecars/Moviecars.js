import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";

function Moviecars({ movie} ) {
  return (
    <div>{
              <>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={movie.posterUrl} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>
         {movie.Description}
        </Card.Text>
        <ReactStars
  count={5}
  //onChange={ratingChanged}
  size={24}
  activeColor="#ffd700"
  edit={false}
  value={movie.rating}
/>
      </Card.Body>
            </Card>
  
</>


        
    

  }
    

      
  </div>
  )
}

export default Moviecars