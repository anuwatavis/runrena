import React, { Component } from "react";
import { Card, Row, Col, CardHeader, Input, FormGroup, Button, Form } from "reactstrap";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import { profileUpdate } from "../store/actions/profileAction";
class MyProfile extends Component {
  state = {
    firstName: this.props.profile.firstName,
    lastName: this.props.profile.lastName,
    gender: this.props.profile.gender,
    height: this.props.profile.height,
    weight: this.props.profile.weight,
    quote: this.props.profile.quote,
    nameClicked: false,
    lastNameClicked: false,
    quoteClicked: false,
    weightClicked: false,
    heightClicked: false,
    genderClicked: false,
    authId: this.props.auth,
  };
  handleClick = (e) => {
    this.setState({ nameClicked: true });
    console.log("click");
  };
  handelClickLastName = (e) => {
    this.setState({ lastNameClicked: true });
  };
  handelChangeFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };
  handleChangeLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    this.setState({ nameClicked: false });
    this.props.profileUpdate(this.state);
  };
  handelSubmitLastName = (e) => {
    e.preventDefault();
    this.setState({ lastNameClicked: false });
  };

  handleClickQuote = (e) => {
    this.setState({ quoteClicked: true });
  };
  handelSubmitQuote = (e) => {
    e.preventDefault();
    this.setState({ quoteClicked: false });
    this.props.profileUpdate(this.state);
  };

  handelChangeQuote = (e) => {
    this.setState({ quote: e.target.value });
  };
  // edit weight
  handelClickWeight = (e) => {
    this.setState({ weightClicked: true });
  };
  handelChangeWeight = (e) => {
    this.setState({ weight: e.target.value });
  };
  handelSubmitWeight = (e) => {
    e.preventDefault();
    this.setState({ weightClicked: false });
    this.props.profileUpdate(this.state);
  };

  //edit height
  handelClickHeight = (e) => {
    this.setState({ heightClicked: true });
  };
  handelChangeHeight = (e) => {
    this.setState({ height: e.target.value });
  };
  handelSubmitHeight = (e) => {
    e.preventDefault();
    this.setState({ heightClicked: false });
    this.props.profileUpdate(this.state);
  };
  //gender
  handelClickGender = (e) => {
    this.setState({ genderClicked: true });
  };
  handelChangeGender = (e) => {
    console.log(e.target.value);
    this.setState({ gender: e.target.value });
  };

  handelSubmitGender = (e) => {
    e.preventDefault();
    this.setState({ genderClicked: false });
    this.props.profileUpdate(this.state);
  };

  render() {
    return (
      <div className="container dashboard">
        <Row>
          <Col md="2">
            <Card>
              <CardHeader className="text-center">{this.state.firstName}</CardHeader>
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
                    <h6>
                      {this.state.firstName} <i className="far fa-edit" onClick={this.handleClick}></i>
                    </h6>

                    {this.state.nameClicked ? (
                      <div>
                        <Form inline onSubmit={this.handelSubmit}>
                          <FormGroup className="mt-1">
                            <Input
                              type="text"
                              name="firstname"
                              id="firstname"
                              placeholder={this.state.firstName}
                              onChange={this.handelChangeFirstName}
                              maxLength="45"
                            />
                          </FormGroup>
                          <Button className="btn-sm ml-2">Edit</Button>
                        </Form>
                      </div>
                    ) : null}
                  </td>
                </tr>
                <tr>
                  <td>Lastname</td>
                  <td className="col">
                    <h6>
                      {this.state.lastName} <i className="far fa-edit" onClick={this.handelClickLastName}></i>
                    </h6>
                    {this.state.lastNameClicked ? (
                      <div>
                        <Form inline onSubmit={this.handelSubmitLastName}>
                          <FormGroup className="mt-1">
                            <Input
                              type="text"
                              name="lastname"
                              id="lastname"
                              placeholder={this.state.lastName}
                              onChange={this.handleChangeLastName}
                              maxLength="45"
                            />
                          </FormGroup>
                          <Button className="btn-sm ml-2">Edit</Button>
                        </Form>
                      </div>
                    ) : null}
                  </td>
                </tr>
                <tr>
                  <td>Gender</td>
                  <td>
                    <h6>
                      {this.state.gender} <i className="far fa-edit" onClick={this.handelClickGender}></i>
                    </h6>
                    {this.state.genderClicked ? (
                      <div>
                        <Form inline onSubmit={this.handelSubmitGender}>
                          <FormGroup className="mt-1">
                            <Input
                              type="select"
                              name="select"
                              id="male"
                              onChange={this.handelChangeGender}
                              defaultValue={"DEFAULT"}
                            >
                              <option value="DEFAULT" disabled>
                                Choose here
                              </option>
                              <option>Male</option>
                              <option>Female</option>
                              <option>Others</option>
                            </Input>
                          </FormGroup>
                          <Button className="btn-sm ml-2">Edit</Button>
                        </Form>
                      </div>
                    ) : null}
                  </td>
                </tr>
                <tr>
                  <td>Weight</td>
                  <td>
                    <h6>
                      {this.state.weight} Kg <i className="far fa-edit" onClick={this.handelClickWeight}></i>
                    </h6>
                    {this.state.weightClicked ? (
                      <div>
                        <Form inline onSubmit={this.handelSubmitWeight}>
                          <FormGroup className="mt-1">
                            <Input
                              type="number"
                              name="firsname"
                              id="weight"
                              placeholder={this.state.weightClicked}
                              onChange={this.handelChangeWeight}
                            />
                          </FormGroup>
                          <Button className="btn-sm ml-2">Edit</Button>
                        </Form>
                      </div>
                    ) : null}
                  </td>
                </tr>
                <tr>
                  <td>Height</td>
                  <td>
                    <h6>
                      {this.state.height} cm <i className="far fa-edit" onClick={this.handelClickHeight}></i>
                    </h6>
                    {this.state.heightClicked ? (
                      <div>
                        <Form inline onSubmit={this.handelSubmitHeight}>
                          <FormGroup className="mt-1">
                            <Input
                              type="number"
                              name="firsname"
                              id="height"
                              placeholder={this.state.height}
                              onChange={this.handelChangeHeight}
                            />
                          </FormGroup>
                          <Button className="btn-sm ml-2">Edit</Button>
                        </Form>
                      </div>
                    ) : null}
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
                    <h6>
                      {this.state.quote} <i className="far fa-edit" onClick={this.handleClickQuote}></i>
                    </h6>
                    {this.state.quoteClicked ? (
                      <div>
                        <Form inline onSubmit={this.handelSubmitQuote}>
                          <FormGroup className="mt-1">
                            <Input
                              type="text"
                              name="firsname"
                              id="examplePassword"
                              placeholder={this.state.quote}
                              onChange={this.handelChangeQuote}
                            />
                          </FormGroup>
                          <Button className="btn-sm ml-2">Edit</Button>
                        </Form>
                      </div>
                    ) : null}
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

const mapDispatchToProps = (dispatch) => {
  return {
    profileUpdate: (data) => dispatch(profileUpdate(data)),
  };
};
export default connect(null, mapDispatchToProps)(MyProfile);
