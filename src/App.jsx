import React from 'react';
import Navbar from '../components/Navbar';
import Movie from '../components/Movie';
import MovieDetail from '../components/MovieDetail';
import signin_page from './pages/signin_page';
import ContentContainer from '../components/ContentContainer'; // Import the ContentContainer
import PlaceholderContainer from '../components/PlaceholderContainer';
import { useState } from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

//not sure pa how to implement this
import Signin from "./pages/signin_page";
import Createacct from "./pages/createacct_page";


import HomePage from "./pages/home_page";
import Friends from "./pages/friends_page";
import Watchlist from "./pages/watchlist_page";

function App() {

  const [showNavbar, setShowNavbar] = useState(true);
 
  return (
    <>
      <Router>  
          {showNavbar && <Navbar />}
          <Routes>
            <Route path="/" element={<PlaceholderContainer><HomePage /></PlaceholderContainer>} />
            <Route path="/home_page" element={<PlaceholderContainer><HomePage /></PlaceholderContainer>} />
            <Route path="/Movie" element={<ContentContainer><Movie /></ContentContainer>} />

            <Route path="/movie/:id" element={<ContentContainer><MovieDetail /></ContentContainer>} />
            
            <Route path="/friends_page" element={<PlaceholderContainer><Friends /></PlaceholderContainer>} />
            <Route path="/watchlist_page" element={<PlaceholderContainer><Watchlist /></PlaceholderContainer>} />
            <Route path="/signin_page" element={<PlaceholderContainer><Signin setShowNavbar={setShowNavbar}/></PlaceholderContainer>} />            
          </Routes>
      </Router>
    </>
  );
}

export default App;
