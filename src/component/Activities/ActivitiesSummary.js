import React from "react";
import Avatar from "react-avatar";
import { Card, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";
import moment from "moment";
import DeletePost from "./DeletePost";
let name = "";
let deleteState = false;
let profileUrl = "";
let initial = "";

const ActivitiesSummary = ({ activity, profile, auth, users }) => {
  if (auth.uid === activity.userId) {
    deleteState = true;
  } else {
    deleteState = false;
  }
  if (users) {
    users.forEach((user) => {
      if (activity.userId === user.id) {
        profileUrl = user.profileUrl;
        name = user.firstName;
        initial = user.lastName;
      }
    });
  }

  return (
    <div>
      <Card className="activity feed-entry mt-4">
        <CardBody>
          <Row className="entry header">
            <Col md="2" xs="2">
              <Link to={"/runner/" + activity.userId}>
                <Avatar name={name + " " + initial} size="50" round={true} src={profileUrl} />
              </Link>
            </Col>
            <Col md="8" xs="8">
              <div className="entry owner">{name}</div>
              <div className="entry timestamp">{moment(activity.createdAt.toDate()).calendar()}</div>
            </Col>
            <Col md="2" xs="2">
              {deleteState ? <DeletePost activity={activity} /> : null}
            </Col>
          </Row>
          <Row className="entry-body">
            <Col md="2" className="d-flex justify-content-center align-self-center">
              <h1 className="display-4">
                <i class="icon-iconpost">
                  <span class="path1"></span>
                  <span class="path2"></span>
                </i>
              </h1>
            </Col>
            <Col md="10">
              <Row>
                <Col md="12">
                  <h3 className="thai-font">{activity.titleActivity}</h3>
                </Col>
                <Col md="12">
                  <Row>
                    <Col md="4" className="stat-list">
                      <div>Distance</div>
                      <div>{activity.totalDistance} Km</div>
                    </Col>
                    <Col md="4" className="stat-list">
                      <div>Pace</div>
                      <div>{activity.averagePace} /Km</div>
                    </Col>
                    <Col md="4">
                      <div>Time</div>
                      <div>{activity.totalTime} Min</div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(ActivitiesSummary);
