import React, { Component } from "react";
import { Card, CardFooter, CardBody, CardTitle, Row, Col, CardHeader } from "reactstrap";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import ChartCompare from "./ChartCompare";
class Overview extends Component {
  render() {
    return (
      <div className="container mt-2">
        <Card>
          <CardHeader>Overview</CardHeader>
          <Row className="align-items-center">
            <Col md="9"></Col>
            <Col md="3" className="text-center">
              <div className="mt-2">
                <DayPickerInput />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <ChartCompare />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Overview;
