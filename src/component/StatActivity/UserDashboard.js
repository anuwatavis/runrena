import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { firebaseConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import UserProfile from "./UserProfile";
import Overview from "./Overview";
import MyStat from "./MyStat";
import { friendAction } from "../store/actions/friendAction";
class UserDashboard extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.friendList(this.props.auth.uid);
  }
  render() {
    const { followerProfile, activities, auth, followerId, followedStateData, friend } = this.props;
    let followerData;

    if (followedStateData !== undefined) {
      if ("followers" in followedStateData[0]) {
        if (followedStateData[0]["followers"].length !== 0) {
          followerData = { followerState: followedStateData[0]["followers"][0]["followered"] };
        } else {
          followerData = { followerState: false };
        }
      } else {
        followerData = { followerState: false };
      }
    } else {
    }
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div>
        {followerProfile && auth && followerId && followerProfile && activities && followerData && auth ? (
          <UserProfile
            userId={auth.uid}
            followedState={followerData}
            followerId={followerId}
            followerProfile={followerProfile}
            activities={activities}
          />
        ) : null}
        {friend ? <Overview friend={friend} /> : null}
        <MyStat activities={activities} userId={followerId} />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.match.params.id;
  return {
    followerId: userId,
    followerProfile: state.firestore.ordered.users,
    activities: state.firestore.ordered.activities,
    auth: state.firebase.auth,
    followedStateData: state.firestore.ordered.runrena_friend,
    friend: state.friend.friend, // frindList of follow
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    friendList: (userId) => dispatch(friendAction(userId)),
  };
};
export default compose(
  firebaseConnect(), // connect to firebase because what to auth uid
  connect(mapStateToProps, mapDispatchToProps), // map statetoprop
  firestoreConnect((props) => [
    // have props value that get from firebase.auth.uid
    {
      collection: "activities",
      where: [["userId", "==", props.followerId]],
    },
    {
      collection: "users",
      doc: props.followerId,
    },
    {
      collection: "runrena_friend",
      doc: props.auth.uid,
      subcollections: [{ collection: "followers", doc: props.followerId }],
    },
  ])
)(UserDashboard);
