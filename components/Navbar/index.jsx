import React, { useState } from 'react';
import { Nav, NavLink, Bars, NavMenu, LogoutContainer } from "./NavBarElements";
import { FaHome, FaUserFriends, FaList, FaPencilAlt } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";
import PostTab from '../../src/pages/PostTab';


const Navbar = () => {
    
    // State to manage the visibility of the PostTab
    const [isPostTabVisible, setIsPostTabVisible] = useState(false);

    // Function to toggle the PostTab visibility
    const togglePostTab = () => {
        setIsPostTabVisible(!isPostTabVisible);
    };

    const handlePostClick = (event) => {
        event.preventDefault();
        togglePostTab();
    };
    
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <h3>CineShare 🎥</h3>
                    <NavLink to="/home_page">
                        <FaHome style={{ marginRight: '8px' }} />
                        Home
                    </NavLink>
                    <NavLink to="/Movie">
                        <BiSolidCameraMovie style={{ marginRight: '8px' }} />
                        Movies
                    </NavLink>
                    <NavLink to="/friends_page">
                        <FaUserFriends style={{ marginRight: '8px' }} />
                        Friends
                    </NavLink>
                    <NavLink to="/watchlist_page">
                        <FaList style={{ marginRight: '8px' }} />
                        Watchlist
                    </NavLink>
                    <br></br>
                    <button to="#" onClick={handlePostClick} style = {{  backgroundColor: "#A949F5"}}>
                        <FaPencilAlt style={{ marginRight: '8px' }} />
                        Post
                    </button>
                    
                </NavMenu>

                <LogoutContainer>
                    <NavLink to="myprofile_page">
                        <img src = "https://i1.sndcdn.com/artworks-L49vhWJuy2FaudQW-wDuQQg-t500x500.jpg" height = "75"
                            style={{ 
                                borderRadius: '50%', 
                                width: '75px', 
                                height: '75px', 
                                objectFit: 'cover' 
                            }} 
                            alt="Profile"></img>
                    </NavLink>
                    <NavLink to="signin_page">
                       ⎗ Logout
                    </NavLink>
                </LogoutContainer>
            </Nav>
            {isPostTabVisible && <PostTab isVisible={isPostTabVisible} onClose={togglePostTab} />}
        </>
    );
};

export default Navbar;
