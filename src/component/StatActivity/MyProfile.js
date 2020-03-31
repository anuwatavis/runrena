import React, { Component } from "react";
import { Card, Row, Col, Badge, CardHeader, Input, FormGroup, Label, Button, Form } from "reactstrap";
import { connect } from "react-redux";
import { Table } from "reactstrap";

class MyProfile extends Component {
  state = {
    name: null,
    gender: null,
    weight: null,
    height: null,
    location: null,
    quote: null,
    nameClicked: false
  };
  handelClick = e => {
    console.log("click");
    this.setState({ nameClicked: true });
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
                  <td className="col" id="name" onClick={this.handelClick}>
                    {/* <div>Anuwat {this.state.nameClicked ? <Input type="text"></Input> : null}</div> */}
                    <Form inline>
                      {this.state.nameClicked ? <h6></h6> : <h6>Anuwat</h6>}
                      <FormGroup>
                        {this.state.nameClicked ? (
                          <Input
                            type="text"
                            name="password"
                            id="examplePassword"
                            placeholder="don't tell!"
                            className="mr-2"
                          />
                        ) : null}
                      </FormGroup>
                      {this.state.nameClicked ? <Button>Edit</Button> : null}
                    </Form>
                  </td>
                </tr>
                <tr>
                  <td>Lastname</td>
                  <td className="col">
                    <h6>Sukthong</h6>
                  </td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>
                    <h6>Male</h6>
                  </td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>
                    <h6>60 kg</h6>
                  </td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>
                    <h6>167 kg</h6>
                  </td>
                </tr>
                <tr>
                  <td>Location</td>
                  <td>
                    <h6>Phatthalung, Thailand</h6>
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

const mapStateToProps = state => {
  console.log(state);
  return {
    profile: state.firebase.profile
  };
};
export default connect(mapStateToProps, null)(MyProfile);
