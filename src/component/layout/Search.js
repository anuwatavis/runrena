import React, { Component } from "react";
import { Nav, NavItem, NavLink, Form, FormGroup, Label, Input } from "reactstrap";
class Search extends Component {
  render() {
    return (
      <Nav navbar>
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Find Runner
            </Label>
            <Input type="text" name="email" id="exampleEmail" placeholder="Runner Name" />
          </FormGroup>
        </Form>
      </Nav>
    );
  }
}
export default Search;
