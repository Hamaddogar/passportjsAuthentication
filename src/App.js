import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import { Provider } from "react-redux";
import SignUp from "../src/signup/signup";
import Login from "../src/login/login";

import { BrowserRouter, Route, Link, Redirect } from "react-router-dom";
 import Dashboard from '../src/Dashboard/dashboard'

function App() {

   let getToken = localStorage.getItem('sessionExpire')
setTimeout(() => {
  localStorage.removeItem('sessionExpire')
  alert("your Token hasbeen Expire")
}, 86400);
  return (
    <BrowserRouter>
      {getToken?<Redirect to="/dashboard"/>:<Redirect to="/login"/>}
      <Route  exact path="/signup"  component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </BrowserRouter>
  );
}

export default App;
