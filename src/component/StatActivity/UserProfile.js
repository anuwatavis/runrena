import React, { Component } from "react";
import Avatar from "react-avatar";
import { Card, Row, Col, Badge } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { followerAction } from "../store/actions/followerAction";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
let followed;
class UserProfile extends Component {
  state = {
    userId: this.props.auth,
    userFollowerId: this.props.profile[0].id
  };
  handelFollowerClicked = e => {
    followed = !followed;
    let userId = this.state.userId;
    let userFollowerId = this.state.userFollowerId;
    let data = { userId: userId, userFollowerId: userFollowerId, followed: followed };
    this.props.followerAction(data);
  };

  render() {
    const { profile, activities, auth, friends } = this.props;

    if (this.state.userId !== this.state.userFollowerId && friends !== undefined) {
      console.log("UserProfile -> render -> friends", friends);
      if (friends[0].followers.length !== 0) {
        followed = friends[0].followers[0].followered;
      }
    }
    let countActivity = "loading";
    if (activities) {
      countActivity = activities.length;
    }

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
              {profile ? <h5>{profile[0].firstName}</h5> : null}
              {friends && followed ? (
                <Button color="primary" size="sm" className="rounded-70 mb-3" onClick={this.handelFollowerClicked}>
                  unfollow
                </Button>
              ) : null}
              {friends && !followed ? (
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
                  <h4>{profile ? <Badge color="secondary">{profile[0].quote}</Badge> : null}</h4>
                </Col>
              </Row>
            </Col>
            <Col>
              <div className="font-weight-bold">last 4 weeks</div>
              <div className="display-4">{countActivity}</div>
              <div>total activities</div>
            </Col>
            <Col>
              <Link to={"/profile/"}>
                <Button color="secondary" size="sm">
                  <i className="fas fa-user-edit"></i>
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

const mapStateToProps = (state, ownProps) => {
  let followered = ownProps.profile[0].id;
  return {
    auth: state.firebase.auth.uid,
    friends: state.firestore.ordered.runrena_friend,
    followered_id: followered
  };
};

const mapDispatchToProps = dispatch => {
  return {
    followerAction: data => dispatch(followerAction(data))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => [
    {
      collection: "runrena_friend",
      doc: props.auth,
      subcollections: [{ collection: "followers", doc: props.followered_id }]
    }
  ])
)(UserProfile);
