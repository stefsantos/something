import React, { useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";

function createacct_page({ setShowNavbar }) {
    const navigate = useNavigate();

    const navigatesignin = () => {
        navigate('/signin_page'); // Corrected the path here
        setShowNavbar(true);
    }

    useLayoutEffect(() => {
        setShowNavbar(false);
    }, [])

    return (
        <div>
            <header>
                <h1>Cineshare</h1>
                <h1>Create Account</h1>
            </header>
            <div>
                <button onClick={navigatesignin}>Sign Up</button> {/* Changed button label to "Sign In" */}
            </div>
        </div>
    );
}

export default createacct_page;
