import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
class SignUp extends Component {
  render() {
    return (
      <div className="signin-page">
        <Form className="form-signin">
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Username</Label>
            <Input type="password" name="password" id="password" placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Height</Label>
            <Input type="password" name="password" id="password" placeholder="Password" />
          </FormGroup>
          <Button className="btn-block">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default SignUp;
