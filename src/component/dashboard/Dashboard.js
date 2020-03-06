import React, { Component } from "react";
import AtheleteProfile from "./AtheleteProfile";
import WeekReport from "./WeekReport";
import ActivitiesList from "../Activities/ActivitiesList";
import CreateActivities from "../Activities/CreateActivities";
import Information from "./Informations";
import { connect } from "react-redux";
class Dashboard extends Component {
  render() {
    const { activities } = this.props;
    console.log(activities);
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
              <ActivitiesList activities={activities} />
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

const mapStateToProps = state => {
  return { activities: state.activities.activities };
};
export default connect(mapStateToProps)(Dashboard);
