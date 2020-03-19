import React, { Component } from "react";
import { Card, CardFooter, CardBody, CardTitle, Row, Col, CardHeader } from "reactstrap";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import TableStat from "./TableStat";
class MyStat extends Component {
  render() {
    return (
      <div className="container mt-2 mb-5">
        <Card>
          <CardHeader>My Stat</CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col md="6">
                <div className="pb-5 mb-5">
                  <DayPicker />
                </div>
              </Col>
              <Col md="6">
                <TableStat />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default MyStat;
