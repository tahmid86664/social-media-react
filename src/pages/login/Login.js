import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <div className="login__wrapper">
        <div className="login__left">
          <h3 className="login__logo">Friendlyyy</h3>
          <span className="login__desc">
            Connect with you friends by logging in 💌  🔥 🚀 
          </span>
        </div>
        <div className="login__right">
          <div className="login__formContainer">
            <input type="email" className="loginInput" placeholder="Enter you email..." />
            <input type="password" className="loginInput" placeholder="Enter you password..." />
            <button className="login__button">Log In</button>
            <span className="login__forgotPass">Forgot Password?</span>
            <button className="login__createNewAcc">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Login;