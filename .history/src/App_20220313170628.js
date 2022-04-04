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
      <div>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home/>} exact />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/login" element={<Login/>} />
        </Routes>
      </div>
      </BrowserRouter>

    );
  }
}

export default App;