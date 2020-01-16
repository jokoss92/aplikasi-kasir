import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kasir from './container/User/Kasir';
import NavBar from './components/Navbar';
import HomeAdmin from './container/Admin/HomeAdmin';
import {Switch, Route} from  'react-router-dom';

const liff = window.liff;  

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route path="/" exact component={() => <NavBar title="User"/>}/>
        <Route path="/admin" component={() => <NavBar title="Admin"/>}/>
        </Switch>
        <Switch>
        <Route path="/" exact component={() => <Kasir/>}/>
        <Route path="/admin" component={() => <HomeAdmin/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
