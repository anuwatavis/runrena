import React, { Component } from "react";
import AtheleteProfile from "./AtheleteProfile";
import WeekReport from "./WeekReport";
import ActivitiesList from "../Activities/ActivitiesList";
import CreateActivities from "../Activities/CreateActivities";
import Information from "./Informations";
class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col">
              <AtheleteProfile />
              <WeekReport />
            </div>
            <div className="col-6">
              <CreateActivities />
              <ActivitiesList />
            </div>
            <div className="col">
              <Information />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Dashboard;
