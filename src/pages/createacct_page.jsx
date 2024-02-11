import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './createacct_page.css';
import logo from '../assets/CineShare Logo Request.webp';

function CreateAcctPage({ setShowNavbar }) {
  const navigate = useNavigate();

  const [userName, setUserName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigateHome = () => {
    navigate('/home_page');
    setShowNavbar(true);
  }

  const handleSignup = (event) => {
    event.preventDefault();
    console.log('Signup with:', newEmail, newPassword);
    navigateHome(); // Redirect to home after signup
  };


  const navigateSignIn = () => {
    navigate('/signin_page');
    setShowNavbar(true);
  };

  useLayoutEffect(() => {
    setShowNavbar(false);
  }, []);

  return (
    <div className="create-account-fullscreen">
      <div className="create-account-fullscreen">
          <div className="create-account-side-bar">
              <img src={logo} alt="logo" height="400px" width="400px" />
          </div>
          <div className="create-account-container">
              <div className="signup-container">
                  <h2>Create Account</h2>
                  <form className="signup-form" onSubmit={handleSignup}>
                      <div className="input-group">
                          <label htmlFor="userName">Username</label>
                          <input
                              id="userName"
                              type="text"
                              value={userName}
                              onChange={(e) => setUserName(e.target.value)}
                              required
                          />
                      </div>
                      <div className="input-group">
                          <label htmlFor="newEmail">Email</label>
                          <input
                              id="newEmail"
                              type="email"
                              value={newEmail}
                              onChange={(e) => setNewEmail(e.target.value)}
                              placeholder="example@gmail.com"
                              required
                          />
                      </div>
                      <div className="input-group">
                          <label htmlFor="newPassword">Password</label>
                          <input
                              id="newPassword"
                              type="password"
                              value={newPassword}
                              onChange={(e) => setNewPassword(e.target.value)}
                              required
                          />
                      </div>
                      <div className="input-group">
                          <label htmlFor="confirmPassword">Confirm Password</label>
                          <input
                              id="confirmPassword"
                              type="password"
                              value={confirmPassword}
                              onChange={(e) => setConfirmPassword(e.target.value)}
                              required
                          />
                      </div>
                      <button onClick={navigateSignIn} type="submit" className="signup-button">
                          Create Account
                      </button>
                  </form>
                  <div className="signin-link">
                      Already have an account?{" "}
                      <button onClick={navigateSignIn} className="text-button">
                          Sign In
                      </button>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}

export default CreateAcctPage;
