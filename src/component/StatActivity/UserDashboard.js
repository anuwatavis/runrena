import React, { Component } from "react";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";
import { firestoreConnect } from "react-redux-firebase";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
class UserDashboard extends Component {
  render() {
    const { profile, activities, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <UserProfile profile={profile} activities={activities} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("UserDashBoard -->", state);

  return {
    authId: state.firebase.auth.uid,
    profile: state.firebase.profile,
    activities: state.firestore.ordered.activities,
    auth: state.firebase.auth
  };
};
export default compose(
  firebaseConnect(), // connect to firebase because what to auth uid
  connect(mapStateToProps), // map statetoprop
  firestoreConnect(props => [
    // have props value that get from firebase.auth.uid
    {
      collection: "activities",
      where: [["userId", "==", props.authId]]
    }
  ])
)(UserDashboard);
