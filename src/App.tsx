import React from 'react';
// import { Typography } from '@material-ui/core';
// import SignInSide from './components/signIn/SignInSide';
// import LandingPage from './pages/landingPage';
import Overview from './pages/overview';
import Suppliers from './pages/suppliers';
// import Loaders from './pages/loaders';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/overview'>
            <Overview />
          </Route>

          <Route path='/suppliers'>
            <Suppliers />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
