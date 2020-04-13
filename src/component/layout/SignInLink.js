import React from "react";
import { Nav, NavItem, NavLink } from "reactstrap";
import Avatar from "react-avatar";
import { connect } from "react-redux";
import { signOut } from "../store/actions/authAction";
import SearchBox from "./SearchBox";
const SignInLink = (props) => {
  const { profile } = props;
  console.log("profile --> ", profile);
  return (
    <Nav navbar>
      <SearchBox />
      <NavItem>
        <a href={"/runner/" + profile.auth}>
          {!profile["isEmpty"] && profile.profileUrl.length <= 2 ? (
            <Avatar className="mb-2" name={profile.firstName + " " + profile.lastName} size="35" round={true} />
          ) : null}

          {!profile["isEmpty"] && profile.profileUrl.length > 2 ? (
            <Avatar
              className="mb-2"
              name={profile.firstName + " " + profile.lastName}
              size="35"
              round={true}
              src={profile.profileUrl}
            />
          ) : null}
        </a>
      </NavItem>
      <NavItem>
        {/* <a onClick={props.signOut}>Log Out</a> */}
        <NavLink href="/" onClick={props.signOut}>
          Log Out
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={"/runner/" + props.auth}>{props.profile.firstName}</NavLink>
      </NavItem>
    </Nav>
  );
};

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignInLink);
