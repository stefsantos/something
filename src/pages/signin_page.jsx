import React, { useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";

function signin_page({ setShowNavbar }) {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/home_page');
        setShowNavbar(true);
    }

    const navigateCreateAccount = () => {
        navigate('/createacct_page'); // Add the correct path for your create account page
        setShowNavbar(true);
    }

    useLayoutEffect(() => {
        setShowNavbar(false);
    }, [])

    return (
        <div>
            <header>
                <h1>Cineshare</h1>
                <h1>Sign in page</h1>
            </header>
            <div>
                <button onClick={navigateHome}>Login</button>
            </div>
            <div>
                <button onClick={navigateCreateAccount}>Create Account</button> {/* New button */}
            </div>
        </div>
    );
}

export default signin_page;
