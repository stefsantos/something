import React, { useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import SignUp from '../../components/SignUp';

function createacct_page({ setShowNavbar }) {
    const navigate = useNavigate();

    const navigatesignin = () => {
        navigate('/signin_page'); 
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
            <SignUp />
            <div>
                <button onClick={navigatesignin}>Go Back</button> {/* Changed button label to "Sign In" */}
            </div>
        </div>
    );
}

export default createacct_page;
