import React, { useState } from 'react';
import './SignUp.css';

function SignUp() {

    return (
        <div className="form-contrainer">
            <div className="form">
            <div className="form-body">
                <div className="username">
                    <label className="form__label" for="userName">Username </label>
                    <input className="form__input" type="text" id="userName" placeholder="User Name"/>
                </div>
                <div className="lastname">
                    <label className="form__label" for="lastName">Last Name </label>
                    <input  type="text" name="" id="lastName"  className="form__input"placeholder="Last Name"/>
                </div>
                <div className="firstname">
                    <label className="form__label" for="firstName">First Name </label>
                    <input  type="text" name="" id="firstName"  className="form__input"placeholder="First Name"/>
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input  type="email" id="email" className="form__input" placeholder="Email"/>
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password"  id="password" placeholder="Password"/>
                </div>
                <div className="confirm-password">
                    <label className="form__label" for="confirmPassword">Confirm Password </label>
                    <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password"/>
                </div>
            </div>
            <div class="footer">
                <button type="submit" class="btn">Register</button>
            </div>
        </div> 
      </div>   
    );
}

export default SignUp;