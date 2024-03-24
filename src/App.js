
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/Navbar/NavBar';
import Filter from './components/Filter/Filter';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import MovieDetailss from './components/movieDetailss/MovieDetailss';



function App() {
  const [ratingChange,setRatingChange]=useState(1);
  const[searchInput,setSearchInput]=useState("");
  const[newMovie , setNewmovie]=useState({});
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  
  const[moviesData , setMoviesData]=useState([
    {
        id:Math.random(),
        title:'No Time to Die',
        posterUrl:"https://upload.wikimedia.org/wikipedia/en/f/fe/No_Time_to_Die_poster.jpg",
        rating:5,
        Description:'No Time to Die is 719 on the JustWatch Daily Streaming Charts today. The movie has moved up the charts by 174 places since yesterday. In the United States, it is currently more popular than Terminal but less popular than Playback.',
       Trailer : "https://www.youtube.com/embed/BIhNsAtPbPI?si=uQwbA1d0CT7R8iHu" 
      },
    {
        id:Math.random(),
        title:'Barbie',
        posterUrl:"https://media1.ledevoir.com/images_galerie/nwd_1512092_1170463/image.jpg",
        rating:3,
        Description:'tarring Margot Robbie as Barbie and Ryan Gosling as Ken, Barbie is available to stream on Max and on sale when you buy it on digital at Prime Video. Those who still can’t get enough of Barbiecore pink — which was noticeably absent at the 96th Academy Awards — can shop the official Barbie: The World Tour book (out April 19) featuring Robbie and stylist Andrew Mukamal’s press tour looks inspired by the Mattel doll.',
        Trailer:"https://www.youtube.com/embed/pBk4NYhWNMM?si=dxPvC_bEFdLbL4nw" 
      },
    {
        id:Math.random(),
        title:'Infinity war',
        posterUrl:"https://www.contrepoints.org/wp-content/uploads/2018/05/avengers_infinity_war.jpg",
        rating:5,
        Description:'As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain.',
        Trailer:"https://www.youtube.com/watch?v=pVxOVlm_lE8" 
    },

]);
const handleSave = () =>{
  setMoviesData([...moviesData , newMovie 
    ]);handleClose();
};


  return (
    <div className="App" >
        <NavBar ratingChange={ratingChange}
      setRatingChange={setRatingChange}
      setSearchInput={setSearchInput}
      newMovie={newMovie}
      setNewmovie={setNewmovie}
      handleSave={handleSave}
      show={show}
      handleClose={handleClose}
      setShow={setShow}
     
     />
      <Routes>
     <Route path="/home" element={ <Filter  
      ratingChange={ratingChange}
      setSearchInput={setSearchInput}
      searchInput={searchInput}
      moviesData={moviesData} />}/>
   
      <Route path="/movies-details/:movieId" element={<MovieDetailss moviesData={moviesData}/>}/>
      </Routes>
     
    </div>
  );
}

export default App;
