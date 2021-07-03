import React from 'react';
// import { Typography } from '@material-ui/core';

// Imports
// import LandingPage from './pages/landingPage';
import Overview from './pages/overview';
import Suppliers from './pages/suppliers';
import SignIn from './pages/SignInSide';
import PageNotFound from './pages/pageNotFound';


import { BrowserRouter as Router, Route, } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/overview' component={Overview} />
        <Route exact path='/suppliers' component={Suppliers} />
        <Route component={PageNotFound} />
      </Router>
    </div>
  );
}

export default App;
