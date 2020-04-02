import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import UserProfile from "./UserProfile";
import Overview from "./Overview";
import MyStat from "./MyStat";
class UserDashboard extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { profile, activities, auth, authId } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div>
        {profile && auth ? <UserProfile profile={profile} activities={activities} userId={auth} /> : null}
        <Overview />
        <MyStat activities={activities} userId={authId} />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
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
