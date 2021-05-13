import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import CarListComponent from "./components/car-list/carlist";
import LoginComponent from "./components/login/login";
import ServiceSheetComponent from "./components/service-sheet-list/serviceSheetList";
import SignInComponent from "./components/signin/signin";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/sign-up">{<SignInComponent />}</Route>
        <Route path="/cars/:id">{<ServiceSheetComponent />}</Route>
        <Route path="/cars">{<CarListComponent />}</Route>
        <Route path="/:id">{/* PROFILE ROUTE */}</Route>
        <Route path="/">{<LoginComponent />}</Route>
      </Switch>

    </div>
  );
}

export default App;
