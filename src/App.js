import React from 'react';
import './App.css'
import CardURL from './componet/Card/CardURL'
import Navbar from './componet/Navbar/Navbar';
import Login from './componet/Login/Login'
import Profile from './componet/Profile'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import PageNotFound from './componet/PageNotFound/PageNotFound'
function App() {
  return (
    <div>
      <Router>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Profile} />
              <Route exact path="/Profile"  />
              <Route exact path="/card" component={CardURL}/>
              <Route exact path="/login" component={Login}/>
              <Route component={PageNotFound} />
            </Switch>
      </Router>
    </div>
  );
}
export default App;
