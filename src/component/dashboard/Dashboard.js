import React, { Component } from "react";
import AtheleteProfile from "./AtheleteProfile";
import WeekReport from "./WeekReport";
import ActivitiesList from "../Activities/ActivitiesList";
import CreateActivities from "../Activities/CreateActivities";
import Information from "./Informations";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import axios from "axios";
class Dashboard extends Component {
  componentDidMount() {
    axios.get("/api/customers").then(res => {
      const data = res.data;
      console.log(data);
    });
  }
  render() {
    const { activities } = this.props;
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
  return { activities: state.firestore.ordered.activities };
};
export default compose(connect(mapStateToProps), firestoreConnect([{ collection: "activities" }]))(Dashboard);
