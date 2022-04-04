import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <Register/> */}
        <Home/>
      </div>
    );
  }
}

export default App;