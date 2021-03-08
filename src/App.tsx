import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">{/* LOGIN ROUTE */}</Route>
        <Route path="/sign-up">{/* SIGNUP ROUTE */}</Route>
        <Route path="/cars/:id">{/* SHEETS ROUTE */}</Route>
        <Route path="/cars">{/* CARS ROUTE */}</Route>
        <Route path="/:id">{/* HOME ROUTE */}</Route>
      </Switch>
    </div>
  );
}

export default App;
