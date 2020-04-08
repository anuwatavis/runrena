import React, { Component } from "react";
import { Card, CardBody, Row, Col, CardHeader } from "reactstrap";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import TableStat from "./TableStat";
import TableDayActivity from "./TableDayActivity";
class MyStat extends Component {
  render() {
    const { userId } = this.props;
    return (
      <div className="container mt-2 mb-5">
        <Card>
          <CardHeader>My Stat</CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col md="3">
                <div className="">
                  <DayPicker />
                </div>
              </Col>
              <Col md="4">
                <div className="">
                  <TableDayActivity className="mb-6" />
                </div>
              </Col>
              <Col md="5">
                <TableStat userId={userId} />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MyStat;
