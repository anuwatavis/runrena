import React, { Component } from "react";
import AtheleteProfile from "./AtheleteProfile";
import WeekReport from "./WeekReport";
import ActivitiesList from "../Activities/ActivitiesList";
import Information from "./Informations";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import UploadTest from "../Activities/UploadTest";

class Dashboard extends Component {
  render() {
    const { activities, auth, users } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />; // if don't login and dashboard will go to login
    return (
      <div>
        <div className="container dashboard">
          <div className="row">
            <div className="col">
              <AtheleteProfile />
              <WeekReport />
            </div>
            <div className="col-6">
              <UploadTest />
              <ActivitiesList activities={activities} users={users} />
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

const mapStateToProps = (state) => {
  return {
    activities: state.firestore.ordered.activities,
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "activities", orderBy: ["createdAt", "desc"] }, { collection: "users" }])
)(Dashboard);
