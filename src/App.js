import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import DummyLogin from './pages/dummyLogiin/DummyLogin';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
    <div className="app">
      <Switch>
        <Route exact path="/">
          { !user ? <Redirect to="/dummylogin" /> : <Home user={user} setUser={setUser} />}
        </Route>
        <Route path="/user/:userId">
          <Profile setUser={setUser} />
        </Route>
        <Route path="/dummylogin">
          <DummyLogin user={user} setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register"> 
          <Register />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
