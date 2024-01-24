// components/Navbar/index.js

import React from "react";
import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	NavBtn,
	NavBtnLink,
} from "./NavBarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<Bars />

				<NavMenu>
					<NavLink to="/home_page" >
						Home
					</NavLink>

                    <NavLink to="/Movie">
                        Movies
                    </NavLink>

					<NavLink to="/friends_page">
                        Friends
                    </NavLink>

					<NavLink to="/watchlist_page">
                        Watchlist
                    </NavLink>

				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
