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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/home_page" element={<HomePage />} />
          <Route path="/Movie" element={<Movie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;