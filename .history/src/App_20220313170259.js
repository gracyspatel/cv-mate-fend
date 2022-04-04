import React, { Component } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Routes>
      </BrowserRouter>

    );
  }
}

export default App;