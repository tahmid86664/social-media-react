import React from 'react';
import './Register.scss';

const Register = () => {
  return (
    <div className="register">
      <div className="register__wrapper">
        <div className="register__left">
          <h3 className="register__logo">Friendlyyy</h3>
          <span className="register__desc">
            Register with Friendlyyy 🔥🔥🔥 and forget Facebook 😛  
          </span>
        </div>
        <div className="register__right">
          <div className="register__formContainer">
            <input type="text" className="register__input" placeholder="Enter you name..." />
            <input type="text" className="register__input" placeholder="Enter you username..." />
            <input type="email" className="register__input" placeholder="Enter you email..." />
            <input type="password" className="register__input" placeholder="Enter you password..." />
            <input type="password" className="register__input" placeholder="Enter you password again..." />
            <button className="register__button">Register</button>
            <button className="register__login">Log In</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Register;