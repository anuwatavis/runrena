import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import SignInLinks from "./SignInLink";
import SignOutLinks from "./SignOutLink";
import Search from "./Search";
import { connect } from "react-redux";
import SignInLink from "./SignInLink";
const Navbars = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = props => setIsOpen(!isOpen);
  const { auth } = props;
  const links = auth.uid ? <SignInLink /> : <SignOutLinks />;
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Runrena</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Navbar className="ml-auto">
            <Search />
            {links}
          </Navbar>
        </Collapse>
      </Navbar>
    </div>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbars);
