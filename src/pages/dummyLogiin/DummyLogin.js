import React from 'react';
import './DummyLogin.scss';
import { users } from '../../mockData';
import { useHistory } from "react-router-dom";

const DummyLogin = ({ user, setUser }) => {
  const history = useHistory();

  const handleUserLogin = (id) => {
    setUser(id);

    history.push('/');
  }

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
          <ul className="login__users">
            {
              users.map(user => 
                <li className="login__userName" onClick={() => handleUserLogin(user.id)}>
                  <img src={user.imgUrl} alt="login profile img" />
                  <span>{user.name}</span>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  );
}


export default DummyLogin;