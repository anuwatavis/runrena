import React, { Component } from "react";
import { Card, Row, Col, Badge, CardHeader, Input, FormGroup, Label, Button, Form } from "reactstrap";
import { Table } from "reactstrap";

class MyProfile extends React.Component {
  state = {
    firstName: this.props.profile.firstName,
    lastName: this.props.profile.lastName,
    gender: this.props.profile.gender,
    height: this.props.profile.height,
    weight: this.props.profile.weight
  };
  render() {
    console.log(this.props);
    return (
      <div className="container dashboard">
        <Row>
          <Col md="2">
            <Card>
              <CardHeader className="text-center">Anuwat</CardHeader>
            </Card>
          </Col>
          <Col md="8">
            <h2>My Profile</h2>
            <hr />
            <p>Current Photo</p>
            <Table hover>
              <tbody>
                <tr>
                  <td>Firstname</td>
                  <td className="col" id="name">
                    <h6>{this.state.firstName}</h6>
                  </td>
                </tr>
                <tr>
                  <td>Lastname</td>
                  <td className="col">
                    <h6>{this.state.lastName}</h6>
                  </td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>
                    <h6>{this.state.gender}</h6>
                  </td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>
                    <h6>{this.state.weight} kg</h6>
                  </td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>
                    <h6>{this.state.height} cm</h6>
                  </td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>
                    <h6>null, null</h6>
                  </td>
                </tr>
                <tr>
                  <td>Quote</td>
                  <td>
                    <h6>“Don’t dream of winning, train for it !</h6>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md="2">"Rerena 2020"</Col>
        </Row>
      </div>
    );
  }
}

export default MyProfile;
