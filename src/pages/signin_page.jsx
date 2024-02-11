import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from "react-router-dom";
import './signin_page.css'; // Make sure the CSS file is named signin_page.css
import logo from '../assets/CineShare Logo Request.webp';

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
        console.log('Login with:', email, password);
        navigateHome(); // Redirect to home after login
    }

    useLayoutEffect(() => {
        setShowNavbar(false);
    }, [])

    return (
        <div className="signin-fullscreen">
            <div className="signin-side-bar">
                <img src = {logo} alt="logo" height = "400px" width = '400px'/>
            </div>
            <div className="signin-container">
                <div className="login-container">
                    <h2>Sign in</h2>
                    <form className="login-form" onSubmit={handleLogin}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="example.email@gmail.com"
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="remember-forgot">
                        </div>
                        <button type="submit" className="signin-button">Sign in</button>
                    </form>
                    <div className="signup-link">
                        No account yet? <button onClick={navigateCreateAccount} className="text-button">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigninPage;
