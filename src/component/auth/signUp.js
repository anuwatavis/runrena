import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Row, Col } from "reactstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../store/actions/authAction";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    weight: null,
    height: null,
    gender: "Male",
    age: null
  };
  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
    console.log(this.state);
  };
  handelSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
  };
  render() {
    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="signin-page">
        <Form className="form-signin" onSubmit={this.handelSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Email" onChange={this.handelChange} required />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={this.handelChange}
              required
            />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                  type="text"
                  name="password"
                  id="firstName"
                  placeholder="First Name"
                  onChange={this.handelChange}
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                  type="text"
                  name="password"
                  id="lastName"
                  placeholder="Last Name"
                  onChange={this.handelChange}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="weight">Weight</Label>
                <Input
                  type="number"
                  name="weight"
                  id="weight"
                  placeholder="Weight(Kg)"
                  min="10"
                  onChange={this.handelChange}
                  required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="height">Height</Label>
                <Input
                  type="number"
                  name="height"
                  id="height"
                  placeholder="Height(Cm)"
                  onChange={this.handelChange}
                  min="50"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="gender">Gender</Label>
                <Input type="select" name="gender" id="gender" onChange={this.handelChange} required>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Age"
                  onChange={this.handelChange}
                  min="7"
                  max="100"
                />
              </FormGroup>
            </Col>
          </Row>
          <div>{authError ? <p>{authError}</p> : null}</div>
          <Button className="btn-block">Submit</Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
