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
import { limitActivityQuery } from "../store/actions/limitActivityQuery";
import { Col, Row } from "reactstrap";

let sortedActivities;
let countQuery = 10;
class Dashboard extends Component {
  state = {
    activitiLimit: 5,
  };
  componentDidMount() {
    this.props.friendAction(this.props.auth.uid);
  }
  handelClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  handelQuery = () => {
    countQuery = countQuery + 10;
    this.props.limitQuery(countQuery);
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
              <Row>
                <Col md={12}>
                  <Button className="col-12 mb-5" onClick={this.handelQuery}>
                    MORE
                  </Button>
                </Col>
              </Row>
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
  console.log("mapStateToProps -> state", state);
  return {
    friend: state.friend.friend,
    activities: state.firestore.ordered.activities,
    auth: state.firebase.auth,
    users: state.firestore.ordered.users,
    limit: state.limitQueryReducer.limit,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    friendAction: (userId) => dispatch(friendAction(userId)),
    limitQuery: (data) => dispatch(limitActivityQuery(data)),
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    console.log("props dashboard ==>", props);
    return [
      { collection: "activities", where: [["userId", "in", props.name]], limit: props.limit },
      { collection: "users", where: [["userId", "in", props.name]] },
    ];
  })
)(Dashboard);
//where: [["userId", "in", props.friend]]
