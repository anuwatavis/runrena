import React, { Component } from "react";
import Avatar from "react-avatar";
import { Card, Row, Col, Badge } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { followerAction } from "../store/actions/followerAction";
import { followerCountAction } from "../store/actions/followerCountAction";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

let followData = {};
let authState = true;
class UserProfile extends Component {
  state = {
    userId: this.props.userId,
    followerProfile: this.props.followerProfile,
    followerId: this.props.followerId,
    followedState: this.props.followedState.followerState,
    activitiesCount: this.props.activities.length,
  };

  handelFollowerClicked = (e) => {
    let followedStateInvert = !this.state.followedState;
    this.setState({ followedState: followedStateInvert });
    let userId = this.state.userId;
    let followerId = this.state.followerId;
    let data = { userId: userId, followerId: followerId, followerState: followedStateInvert };
    this.props.followerAction(data);
    this.props.followerCountAction(data);
  };
  render() {
    let followData = this.state.followerProfile;
    if (this.state.userId === this.state.followerId) {
      authState = false;
    }
    followData.forEach((data) => {
      if (data.id === this.state.followerId) {
        followData = data;
      }
    });
    const { profileData, profile } = this.props;
    return (
      <div className="container dashboard">
        <Card>
          <Row className="text-center align-items-center">
            <Col>
              <div className="mt-2">
                {profileData["profileUrl"].length <= 2 ? (
                  <Avatar
                    className="mb-2"
                    name={profileData["firstName"] + " " + profileData["lastName"]}
                    size="100"
                    round={true}
                  />
                ) : null}

                {profileData["profileUrl"].length > 2 ? (
                  <Avatar
                    className="mb-2"
                    name={profileData["firstName"] + " " + profileData["lastName"]}
                    size="100"
                    round={true}
                    src={profileData["profileUrl"]}
                  />
                ) : null}
              </div>
              {this.state.followerProfile ? <h5>{followData.firstName}</h5> : null}
              {this.state.followedState && authState ? (
                <Button color="primary" size="sm" className="rounded-70 mb-3" onClick={this.handelFollowerClicked}>
                  unfollow
                </Button>
              ) : null}
              {!this.state.followedState && authState ? (
                <Button color="primary" size="sm" className="rounded-70 mb-3" onClick={this.handelFollowerClicked}>
                  follow
                </Button>
              ) : null}
            </Col>
            <Col>
              <Row className="mt-3">
                <Col md="4" className="stat-list px-0">
                  <div className="font-weight-bold">Follwers</div>
                  <p>{profileData["followers"]}</p>
                </Col>
                <Col md="4" className="stat-list px-0">
                  <div className="font-weight-bold">Follwing</div>
                  <p>{profileData["following"]}</p>
                </Col>
                <Col md="4" className="px-0">
                  <div className="font-weight-bold">Activities</div>
                  <p>{profileData["activities"]}</p>
                </Col>
                <Col md="12" className="mt-3">
                  <h5>
                    {this.state.followerProfile ? (
                      <Badge color="dark">
                        <p className="quote-text">{followData.quote}</p>
                      </Badge>
                    ) : null}
                  </h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <div className="font-weight-bold">Runrena Score</div>
              <div className="display-4">{profileData["activities"]}</div>
              <div>total activities</div>
            </Col>
            <Col className="mt-0">
              <Link to={"/profile/"} className="mt-0">
                <Button color="secondary" size="sm" className="mt-0">
                  <i className="icon-pencil2"></i>
                </Button>
                <h6>
                  <Badge className="mt-0" color="secondary">
                    Edit Profile
                  </Badge>
                </h6>
              </Link>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followerAction: (data) => dispatch(followerAction(data)),
    followerCountAction: (data) => dispatch(followerCountAction(data)),
  };
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth,
    profileData: state.firestore.ordered.users[0],
  };
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [{ collection: "users", where: [["userId", "in", [props.followerId]]] }];
  })
)(UserProfile);
