import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Avatar from "react-avatar";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authAction";
const SignInLink = props => {
  return (
    <Nav navbar>
      <NavItem>
        <a href={"/runner/" + props.auth}>
          <Avatar name={props.profile.initials} size="40" round={true} className="avatar" />
        </a>
      </NavItem>
      <NavItem>
        {/* <a onClick={props.signOut}>Log Out</a> */}
        <NavLink href="/signin" onClick={props.signOut}>
          Log Out
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={"/runner/" + props.auth}>{props.profile.firstName}</NavLink>
      </NavItem>
    </Nav>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};
export default connect(null, mapDispatchToProps)(SignInLink);
