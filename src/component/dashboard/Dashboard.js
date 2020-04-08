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
import axios from "axios";
import { friendAction } from "../store/actions/friendAction";
import { Button } from "reactstrap";

let sortedActivities;
class Dashboard extends Component {
  componentDidMount() {
    this.props.friendAction(this.props.auth.uid);
  }
  handelClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  render() {
    const { activities, auth, users, friend } = this.props;
    //console.log(friend);
    if (!auth.uid) return <Redirect to="/" />; // if don't login and dashboard will go to login
    if (activities) {
      sortedActivities = activities.slice().sort((a, b) => b.createdAt - a.createdAt);
    }
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
              <ActivitiesList activities={sortedActivities} users={users} />
            </div>
            <div className="col">
              <Information />
            </div>
          </div>
        </div>
        <Button className="scroll" onClick={this.handelClick}>
          <h2>^</h2>
        </Button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    friend: state.friend.friend,
    activities: state.firestore.ordered.activities,
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    friendAction: (userId) => dispatch(friendAction(userId)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [{ collection: "activities", where: [["userId", "in", props.name]] }, { collection: "users" }];
  })
)(Dashboard);
//where: [["userId", "in", props.friend]]
