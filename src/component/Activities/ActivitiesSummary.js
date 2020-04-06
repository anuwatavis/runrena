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

const ActivitiesSummary = ({ activity, profile, auth, users }) => {
  if (auth.uid === activity.userId) {
    deleteState = true;
  } else {
    deleteState = false;
  }
  if (users) {
    users.forEach((user) => {
      if (activity.userId === user.id) {
        name = user.firstName;
      }
    });
  }

  return (
    <div>
      <Card className="activity feed-entry mt-4">
        <CardBody>
          <Row className="entry header">
            <Col md="2">
              <Link to={"/runner/" + activity.userId}>
                <Avatar
                  name={name}
                  size="50"
                  round={true}
                  // src="https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2019/05/08/kichoge-winning-london_s.jpg?itok=oiezBvCc"
                />
              </Link>
            </Col>
            <Col md="8">
              <div className="entry owner">{name}</div>
              <div className="entry timestamp">{moment(activity.createdAt.toDate()).calendar()}</div>
            </Col>
            <Col md="2">{deleteState ? <DeletePost activity={activity} /> : null}</Col>
          </Row>
          <Row className="entry-body">
            <Col md="2" className="d-flex justify-content-center align-self-center">
              <i className="fas fa-running run-logo"></i>
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
