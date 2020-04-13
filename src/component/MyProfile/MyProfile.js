import React, { Component } from "react";
import { Card, Row, Col, CardHeader, Input, FormGroup, Button, Form } from "reactstrap";
import { Table } from "reactstrap";
import { connect } from "react-redux";
import { profileUpdate } from "../store/actions/profileAction";
import Avatar from "react-avatar";
class MyProfile extends Component {
  state = {
    firstName: this.props.profile.firstName,
    lastName: this.props.profile.lastName,
    gender: this.props.profile.gender,
    height: this.props.profile.height,
    weight: this.props.profile.weight,
    quote: this.props.profile.quote,
    profileUrl: this.props.auth.profileUrl,
    nameClicked: false,
    lastNameClicked: false,
    quoteClicked: false,
    weightClicked: false,
    heightClicked: false,
    genderClicked: false,
    profileClicked: false,
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

  handelClickProfile = (e) => {
    this.setState({ profileClicked: true });
  };
  handelChangeProfile = (e) => {
    console.log(e.target.value);
    this.setState({ profileUrl: e.target.value });
  };

  handelSubmitProfile = (e) => {
    e.preventDefault();
    this.setState({ profileClicked: false });
    this.props.profileUpdate(this.state);
  };

  render() {
    const { auth } = this.props;
    //console.log(auth);
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
            <Row>
              <Col md={2}>
                {auth.profileUrl.length <= 2 ? (
                  <Avatar className="mb-2" name={auth.firstName + " " + auth.lastName} size="100" round={true} />
                ) : null}

                {auth.profileUrl.length > 2 ? (
                  <Avatar
                    className="mb-2"
                    name={auth.firstName + " " + auth.lastName}
                    size="100"
                    round={true}
                    src={auth.profileUrl}
                  />
                ) : null}
              </Col>
              <Col>
                <i className="icon-pencil2" onClick={this.handelClickProfile}></i>
                {this.state.profileClicked ? (
                  <div>
                    <Form inline onSubmit={this.handelSubmitProfile}>
                      <FormGroup className="mt-1">
                        <Input
                          type="text"
                          name="lastname"
                          id="lastname"
                          placeholder={this.state.profileUrl}
                          onChange={this.handelChangeProfile}
                        />
                      </FormGroup>
                      <Button className="btn-sm ml-2">Edit</Button>
                    </Form>
                  </div>
                ) : null}
              </Col>
            </Row>
            <Table hover>
              <tbody>
                <tr>
                  <td>Firstname</td>
                  <td className="col" id="name">
                    <h6>
                      {this.state.firstName} <i className="icon-pencil2" onClick={this.handleClick}></i>
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
                      {this.state.lastName} <i className="icon-pencil2" onClick={this.handelClickLastName}></i>
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
                      {this.state.gender} <i className="icon-pencil2" onClick={this.handelClickGender}></i>
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
                      {this.state.weight} Kg <i className="icon-pencil2" onClick={this.handelClickWeight}></i>
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
                      {this.state.height} cm <i className="icon-pencil2" onClick={this.handelClickHeight}></i>
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
                  <td>Quote</td>
                  <td>
                    <h6>
                      {this.state.quote} <i className="icon-pencil2" onClick={this.handleClickQuote}></i>
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
        </Row>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    profileUpdate: (data) => dispatch(profileUpdate(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
