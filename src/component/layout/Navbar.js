import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import SignOutLinks from "./SignOutLink";
import Search from "./Search";
import { connect } from "react-redux";
import SignInLink from "./SignInLink";
import SearchBox from "./SearchBox";
const Navbars = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (props) => setIsOpen(!isOpen);
  const { auth, profile } = props;
  const links = auth.uid ? <SignInLink profile={profile} auth={auth.uid} /> : <SignOutLinks />;
  return (
    <div>
      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand href="/">Runrena</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Navbar className="ml-auto">
            {/* <Search /> */}
            {/* <SearchBox /> */}
            {links}
          </Navbar>
        </Collapse>
      </Navbar>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

export default connect(mapStateToProps)(Navbars);
