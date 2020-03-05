import React from "react";
import { Card, CardFooter, CardBody, CardTitle, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

const AtheleteProfile = () => {
  return (
    <div>
      <Card className="athelete-profile-card">
        <Row>
          <Col md="12">
            <Link to="/anuwat">
              <div className="avatar-flex">
                <Avatar
                  name="Anu Wat"
                  size="100"
                  round={true}
                  src="https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2019/05/08/kichoge-winning-london_s.jpg?itok=oiezBvCc"
                />
              </div>
            </Link>
          </Col>
        </Row>
        <CardBody className="text-center">
          <Row>
            <Col md="12">
              <CardTitle>
                <h4>Anu Wat</h4>
              </CardTitle>
            </Col>
            <Col md="12">
              <Row>
                <Col md="4">
                  <div className="text-small">Following</div>
                  <div className="stat-profile">
                    <a href="/">1</a>
                  </div>
                </Col>
                <Col md="4">
                  <div className="text-small">Follower</div>
                  <div className="stat-profile">
                    <a href="/">100</a>
                  </div>
                </Col>
                <Col md="4">
                  <div className="text-small">Activities</div>
                  <div className="stat-profile">
                    <a href="/">2000</a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
        <CardFooter>
          <div className="card-section">
            <div className="text-label text-small">Latest Activity</div>
            <div className="text-small">Afternoon Run • March 1, 2020</div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AtheleteProfile;
