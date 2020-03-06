import React from "react";
import Avatar from "react-avatar";
import { Card, CardBody } from "reactstrap";
import { Link } from "react-router-dom";
import { Row, Col } from "reactstrap";
const ActivitiesSummary = ({ activity }) => {
  const date = new Date().toString();
  return (
    <div>
      <Card className="activity feed-entry">
        <CardBody>
          <Row className="entry header">
            <Col md="2">
              <Link to="/anuwat">
                <Avatar
                  name="Anu Wat"
                  size="50"
                  round={true}
                  src="https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2019/05/08/kichoge-winning-london_s.jpg?itok=oiezBvCc"
                />
              </Link>
            </Col>
            <Col md="10">
              <div className="entry owner">Anu Wat</div>
              <div className="entry timestamp">{date}</div>
            </Col>
          </Row>
          <Row className="entry-body">
            <Col md="2" className="d-flex justify-content-center align-self-center">
              <i className="fas fa-running run-logo"></i>
            </Col>
            <Col md="10">
              <Row>
                <Col md="12">
                  <h3>{activity.title}</h3>
                </Col>
                <Col md="12">
                  <Row>
                    <Col md="4" className="stat-list">
                      <div>Distance</div>
                      <div>{activity.distance}</div>
                    </Col>
                    <Col md="4" className="stat-list">
                      <div>Pace</div>
                      <div>{activity.pace}</div>
                    </Col>
                    <Col md="4">
                      <div>Time</div>
                      <div>{activity.time}</div>
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
export default ActivitiesSummary;
