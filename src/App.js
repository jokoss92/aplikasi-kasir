import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kasir from './container/Kasir';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Kasir />
      </div>
    );
  }
}

export default App;
