import './App.css';
import React from 'react';
import './statics/main-style.css';
import Home from './components/pages/Home';
import Order from './components/pages/Order';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import Reserve from './components/pages/Reserve';
import Admin from './components/pages/Admin';
import Sidebar from './components/Sidebar';



function App() {
  return (
    <Router>
      <Navbar brandName="Rubi Restaurant" opensAt="will open at" btnInfo="Order Online"/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/order" component={Order}></Route>
        <Route path="/reserve" component={Reserve}></Route>
        <Route path="/admin" component={Admin}></Route>
      </Switch>

    </Router>
  );
}



export default App;
