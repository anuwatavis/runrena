import React, { Component } from "react";
import AtheleteProfile from "./AtheleteProfile";
import WeekReport from "./WeekReport";
import ActivitiesList from "../Activities/ActivitiesList";
import Information from "./Informations";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import UploadFile from "../Activities/UploadFile";

class Dashboard extends Component {
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
              <UploadFile />
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
