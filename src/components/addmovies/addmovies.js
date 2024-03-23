import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Addmovies({show,handleClose,newMovie,setNewmovie,handleSave}) {
  const handleChange = (e)=>{
    setNewmovie({...newMovie , [e.target.name]:e.target.value,});
  }
 
  
  return (
   <div>  <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
     <Modal.Title>Modal heading</Modal.Title>
   </Modal.Header>
   <Modal.Body> <Form>
      <Form.Group className="mb-3" >  
        <Form.Control type="text" name="title" placeholder="Title"  onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Control as="textarea" rows={3} name="Description" placeholder="Description"  onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3" >  
        <Form.Control type="text" name="posterUrl" placeholder="Poster Url"  onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" >  
        <Form.Control type="number"  name="rating" placeholder="rating" onChange={handleChange} />
      </Form.Group>
    </Form></Modal.Body>
   <Modal.Footer>
     <Button variant="secondary" onClick={handleClose}>
       Close
     </Button>
     <Button variant="primary" onClick={handleSave}>
       Save Changes
     </Button>
   </Modal.Footer>
 </Modal></div>
    
  )
}

export default Addmovies;