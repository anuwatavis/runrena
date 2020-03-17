import React, { Component } from "react";
import { connect } from "react-redux";
import UserProfile from "./UserProfile";
import { firestoreConnect } from "react-redux-firebase";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
class UserDashboard extends Component {
  render() {
    const { profile } = this.props;
    return (
      <div>
        <UserProfile profile={profile} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("UserDashBoard -->", state);

  return {
    auth: state.firebase.auth.uid,
    profile: state.firebase.profile,
    activities: state.firestore.ordered.activities
  };
};
export default compose(
  firebaseConnect(), // connect to firebase because what to auth uid
  connect(mapStateToProps), // map statetoprop
  firestoreConnect(props => [
    // have props value that get from firebase.auth.uid
    {
      collection: "activities",
      where: [["userId", "==", props.auth]]
    }
  ])
)(UserDashboard);
