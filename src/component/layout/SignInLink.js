import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Avatar from "react-avatar";
const SignInLink = () => {
  return (
    <Nav navbar>
      <NavItem>
        <a href="/anuwat">
          <Avatar name="Anu Wat" size="40" round={true} className="avatar" />
        </a>
      </NavItem>
      <NavItem>
        <NavLink href="/home">Log Out</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/anuwat">Anu Wat</NavLink>
      </NavItem>
    </Nav>
  );
};

export default SignInLink;
