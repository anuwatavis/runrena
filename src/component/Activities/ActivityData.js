import React from "react";
import { Card, CardBody } from "reactstrap";
import { Row, Col } from "reactstrap";
const ActivityData = ({ activityData }) => {
  return (
    <Card className="activity feed-entry mt-2">
      <CardBody>
        <Row className="entry-body">
          <Col md="2" className="d-flex justify-content-center align-self-center">
            <i className="fas fa-running run-logo"></i>
          </Col>
          <Col md="10">
            <Row>
              <Col md="12">
                <h3>You're Stat</h3>
              </Col>
              <Col md="12">
                <Row>
                  <Col md="4" className="stat-list">
                    <div>Distance</div>
                    <div>{activityData.totalDistance} Km</div>
                  </Col>
                  <Col md="4" className="stat-list">
                    <div>Pace</div>
                    <div>{activityData.averagePace} /Km</div>
                  </Col>
                  <Col md="4">
                    <div>Time</div>
                    <div>{activityData.totalTime} Min</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ActivityData;
