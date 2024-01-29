import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";

function SigninPage({ setShowNavbar }) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigateHome = () => {
        navigate('/home_page');
        setShowNavbar(true);
    }

    const navigateCreateAccount = () => {
        navigate('/createacct_page');
        setShowNavbar(true);
    }

    const handleLogin = (event) => {
        event.preventDefault();
        // Here you can add login logic or API call
        console.log('Login with:', email, password);
        navigateHome(); // Redirect to home after login
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
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <button onClick={navigateCreateAccount}>Create Account</button>
        </div>
    );
}

export default SigninPage;
