import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { signIn } from "../store/actions/authAction";
class SignIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    const { authError } = this.props;
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
          <Button className="btn-block">Submit</Button>
          <div>{authError ? <p>{authError}</p> : null}</div>
        </Form>
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    authError: state.auth.authError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};
export default connect(mapStateToprops, mapDispatchToProps)(SignIn);
