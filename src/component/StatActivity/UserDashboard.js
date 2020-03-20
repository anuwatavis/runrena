import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import UserProfile from "./UserProfile";
import Overview from "./Overview";
import MyStat from "./MyStat";
import axios from "axios";
class UserDashboard extends Component {
  // state = {
  //   test: ""
  // };
  // componentDidMount() {
  //   axios.get(`https://us-central1-runrena-b3aa5.cloudfunctions.net/hello/customers`).then(res => {
  //     const persons = res.data;
  //     console.log(typeof persons[0]);
  //     this.setState({ test: persons[0].firstName });
  //   });
  // }
  render() {
    const { profile, activities, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        <UserProfile profile={profile} activities={activities} />
        <Overview />
        <MyStat />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("UserDashBoard -->", state);
  const userId = ownProps.match.params.id;
  return {
    authId: userId,
    profile: state.firestore.ordered.users,
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
    },
    {
      collection: "users",
      doc: props.authId
    }
  ])
)(UserDashboard);
