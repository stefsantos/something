import React from "react";
import { Nav, NavLink, Bars, NavMenu, LogoutContainer } from "./NavBarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <h3>CineShare 🎥</h3>
                    <NavLink to="/home_page">Home</NavLink>
                    <NavLink to="/Movie">Movies</NavLink>
                    <NavLink to="/friends_page">Friends</NavLink>
                    <NavLink to="/watchlist_page">Watchlist</NavLink>
                </NavMenu>

                <LogoutContainer>
                    <NavLink to="signin_page">
                       ⎗ Logout
                    </NavLink>
                </LogoutContainer>
            </Nav>
        </>
    );
};

export default Navbar;
