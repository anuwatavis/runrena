import React, { Component } from "react";
import AtheleteProfile from "./AtheleteProfile";
import WeekReport from "./WeekReport";
class Dashboard extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col">
              <AtheleteProfile />
              <WeekReport />
            </div>
            <div class="col-6">
              <AtheleteProfile />
              <WeekReport />
            </div>
            <div class="col">
              <AtheleteProfile />
              <WeekReport />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
