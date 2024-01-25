import React from 'react';
import Navbar from '../components/Navbar';
import Movie from '../components/Movie';
import ContentContainer from '../components/ContentContainer'; // Import the ContentContainer

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
  return (
    <>
      <Router>  
        <Navbar />
        <ContentContainer> {/* Wrap the Routes in ContentContainer */}
          <Routes>
            <Route path="/home_page" element={<HomePage />} />
            <Route path="/Movie" element={<Movie />} />
            <Route path="/friends_page" element={<Friends />} />
            <Route path="/watchlist_page" element={<Watchlist />} />
          </Routes>
        </ContentContainer>
      </Router>
    </>
  );
}

export default App;
