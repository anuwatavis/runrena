import React, { Component } from "react";
import Avatar from "react-avatar";
import { Card, Row, Col, Badge } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { followerAction } from "../store/actions/followerAction";
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
    return (
      <div className="container dashboard">
        <Card>
          <Row className="text-center align-items-center">
            <Col>
              <div className="mt-2">
                <Avatar
                  name="Anu Wat"
                  size="70"
                  round={true}
                  src="https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2019/05/08/kichoge-winning-london_s.jpg?itok=oiezBvCc"
                />
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
              <Row>
                <Col md="4" className="stat-list px-0">
                  <div className="font-weight-bold">Follwers</div>
                  <div>12</div>
                </Col>
                <Col md="4" className="stat-list px-0">
                  <div className="font-weight-bold">Follwing</div>
                  <div>123</div>
                </Col>
                <Col md="4" className="px-0">
                  <div className="font-weight-bold">Activities</div>
                  <div>11</div>
                </Col>
                <Col md="12" className="mt-4">
                  <h5>{this.state.followerProfile ? <Badge color="dark">{followData.quote}</Badge> : null}</h5>
                </Col>
              </Row>
            </Col>
            <Col>
              <div className="font-weight-bold">last 4 weeks</div>
              <div className="display-4">{this.state.activitiesCount}</div>
              <div>total activities</div>
            </Col>
            <Col>
              <Link to={"/profile/"}>
                <Button color="secondary" size="sm">
                  {/* <i className="fas fa-user-edit"></i> */}Edit Logo
                </Button>
                <h6>
                  <Badge color="secondary">Edit Profile</Badge>
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
  };
};

export default connect(null, mapDispatchToProps)(UserProfile);
