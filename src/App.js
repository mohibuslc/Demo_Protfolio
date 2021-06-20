import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MyNav from './components/Header/MyNav/MyNav';
import SocialLink from './components/Home/SocialLink/SocialLink';

function App() {
  return (
    <Router>
      <MyNav />
      <div className="socialLink">
        <SocialLink></SocialLink>
      </div>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
