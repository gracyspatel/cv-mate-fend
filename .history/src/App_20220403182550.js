import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authentication';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import DashBoard from './components/Dashboard';
import AddJobs from './components/AddJobs';
import ScheduleMeeting from './components/ScheduleMeeting';
import Responses from './components/Responses';

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
                <Route path='/login' exact>
              {/* DashBoard Component */}
              <Login/>
            </Route>
            <Route path='/Dashboard' exact>
              {/* DashBoard Component */}
              <DashBoard/>
            </Route>
            <Route path='/addjobs' exact>
              {/* department Component */}
              <AddJobs/>
            </Route>
            <Route path='/responses' exact>
              {/* department Component */}
              <Responses/>
            </Route>
            <Route path='/schedulemeeting' exact>
              {/* department Component */}
              <ScheduleMeeting/>
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