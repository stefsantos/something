import React from 'react'
import Navbar from '../components/Navbar';
import Movie from '../components/Movie';

import 
{
    BrowserRouter as Router,
    Routes,
    Route,
}   from "react-router-dom";

import HomePage from "./pages/home_page";
import Friends from "./pages/friends_page";
import Watchlist from "./pages/watchlist_page";

function App() {
  return (
    <>
      <Router>  
        <Navbar />
        <Routes>
          <Route path="/home_page" element={<HomePage />} />
          <Route path="/Movie" element={<Movie />} />
          <Route path="/friends_page" element={<Friends />} />
          <Route path="/watchlist_page" element={<Watchlist />} />


        </Routes>
      </Router>
      
    </>
  );
}

export default App;