import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/layout/Navbar";
import Dashboard from "./component/dashboard/Dashboard";
import High from "./component/dashboard/High";
import "./App.css";
import SignIn from "./component/auth/SignIn";
import SignUp from "./component/auth/SignUp";
import UserDashbord from "./component/StatActivity/UserDashboard";
import MyProfile from "./component/MyProfile/MyProfilePage";
import AdminDashboard from "./component/admin/AdminDashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/runrena" component={High} />
          <Route exact path="/" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/runner/:id" component={UserDashbord} />
          <Route path="/profile/" component={MyProfile} />
          <Route path="/admin/" component={AdminDashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
