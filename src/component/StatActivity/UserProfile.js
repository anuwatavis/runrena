import React, { Component } from "react";
import Avatar from "react-avatar";
import { Card, CardFooter, CardBody, CardTitle, Row, Col, CardHeader } from "reactstrap";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
class UserProfile extends Component {
  render() {
    const { profile } = this.props;
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
              <h5>{profile.firstName}</h5>
              <Button color="primary" size="sm" className="rounded-70 mb-3">
                follow
              </Button>
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
              </Row>
            </Col>
            <Col>
              <div className="font-weight-bold">last 4 weeks</div>
              <div className="display-4">12</div>
              <div>total activities</div>
            </Col>
            <Col>
              <i className="far fa-clock display-4"></i>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default UserProfile;
