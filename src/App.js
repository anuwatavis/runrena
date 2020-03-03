import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Dashboard from "./component/dashboard/Dashboard";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
