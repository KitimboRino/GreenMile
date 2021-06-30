import React from 'react';
// import { Typography } from '@material-ui/core';
// import SignInSide from './components/signIn/SignInSide';
// import LandingPage from './pages/landingPage';
import Overview from './pages/overview';
import Suppliers from './pages/suppliers';
// import Loaders from './pages/loaders';
import { BrowserRouter as Router, Route, } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Route exact path='/overview' component={Overview} />
        <Route path='/suppliers' component={Suppliers} />
      </Router>
    </div>
  );
}

export default App;
