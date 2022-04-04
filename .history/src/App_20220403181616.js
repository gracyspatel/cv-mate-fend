import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import Department from "./Components/Department";
import Projects from "./Components/Projects";
import Tasks from "./Components/Tasks";
import Leave from "./Components/Leave";
import Salary from "./Components/Salary";
import Profile from "./Components/Profile";

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';

if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}

class App extends Component {
  render() {
    return (
      <Provider store = { store }>
        <Router>
            <div>
            <Layout>
                {/* <div className="container">
                  <Route exact path="/" component={ Home } />
                  <Route exact path="/register" component={ Register } />
                  <Route exact path="/login" component={ Login } />
                </div> */}
                <Switch>
            <Route path='/Dashboard' exact>
              {/* DashBoard Component */}
              <DashBoard />
            </Route>
            <Route path='/department' exact>
              {/* department Component */}
              <Department />
            </Route>
            <Route path='/project' exact>
              {/* project Component */}
              <Projects />
            </Route>
            <Route path='/tasks' exact>
              {/* tasks Component */}
              <Tasks />
            </Route>
            <Route path='/leave' exact>
              {/* leave Component */}
              <Leave />
            </Route>
            <Route path='/salary' exact>
              {/* salary Component */}
              <Salary />
            </Route>
            <Route path='/events' exact>
              {/* events Component */}
            </Route>
            <Route path='/profile' exact>
              {/* events Component */}
              <Profile />
            </Route>
          </Switch>
              </Layout>
            </div>
          </Router>
        </Provider>
    );
  }
}

export default App;