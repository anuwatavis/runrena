import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
const SignOutLink = () => {
  return (
    <Nav navbar>
      <NavItem>
        <NavLink href="/signup">Sign Up</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/">Log In</NavLink>
      </NavItem>
    </Nav>
  );
};

export default SignOutLink;
