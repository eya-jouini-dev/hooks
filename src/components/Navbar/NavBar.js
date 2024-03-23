import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ReactStars from "react-rating-stars-component";
import './NavBar.css'
import Button from 'react-bootstrap/Button';
import Addmovies from '../addmovies/Addmovies';




function NavBar({setRatingChange,setSearchInput,ratingChange,newMovie,setNewmovie,handleSave,show,handleClose,setShow}) {
 
  const handleShow = () => setShow(true);
 
  const ratingChanged = (rating)=>{
    setRatingChange(rating);

  
  }

 
  
  const handleChange= (e)=>{
    setSearchInput(e.target.value)

  }
  
 
  return (
    <div>
   
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Movies App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Button variant="light"onClick={handleShow} >Add new movie</Button>{' '}
          </Nav>
      
        </Navbar.Collapse>
     
      </Container>
       
      <InputGroup className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-default">
          Search
        </InputGroup.Text>
       
        <Form.Control
        onChange={handleChange}
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
        />  <ReactStars
        count={5}
        onChange={ratingChanged}
        size={24}
        activeColor="#ffd700"
        value={ratingChange}
      
       
      />
  
        </InputGroup>
        
        
    </Navbar>
    <Addmovies show={show} handleClose={handleClose} newMovie={newMovie}  setNewmovie={setNewmovie} handleSave={handleSave}/>
    


</div>
  );
}

export default NavBar;