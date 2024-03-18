
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Filter from './components/Filter/Filter';
import { useState } from 'react';



function App() {
  const [ratingChange,setRatingChange]=useState(1);
  const[searchInput,setSearchInput]=useState("");
  return (
    <div className="App" >
     <NavBar ratingChange={ratingChange}
      setRatingChange={setRatingChange}
      setSearchInput={setSearchInput}
     />
     <Filter  
      ratingChange={ratingChange}
      setSearchInput={setSearchInput}
      searchInput={searchInput}
      />
     
    </div>
  );
}

export default App;
