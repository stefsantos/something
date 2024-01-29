import React, { useLayoutEffect } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate
} from "react-router-dom";

function signin_page({ setShowNavbar }) {

    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/');
        setShowNavbar(true);
    }

    useLayoutEffect(() => {
        setShowNavbar(false);
    }, [])

    return (
        <div>
                <header>
                    <h1>Sign in page</h1>
                </header>
                <button onClick={navigateHome}>Go to Homepage</button>
        </div>
    );
}

export default signin_page;
