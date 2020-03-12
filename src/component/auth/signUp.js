import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../store/actions/authAction";
class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };
  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
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
            <Input type="email" name="email" id="email" placeholder="Email" onChange={this.handelChange} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Password" onChange={this.handelChange} />
          </FormGroup>
          <FormGroup>
            <Label for="firstName">Username</Label>
            <Input type="text" name="password" id="firstName" placeholder="Password" onChange={this.handelChange} />
          </FormGroup>
          <FormGroup>
            <Label for="lastName">Height</Label>
            <Input type="text" name="password" id="lastName" placeholder="Password" onChange={this.handelChange} />
          </FormGroup>
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
