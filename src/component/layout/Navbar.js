import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import SignInLinks from "./SignInLink";
import SignOutLinks from "./SignOutLink";
import Search from "./Search";
import { connect } from "react-redux";
const Navbars = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Runrena</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Navbar className="ml-auto">
            <Search />
            <SignInLinks />
            <SignOutLinks />
          </Navbar>
        </Collapse>
      </Navbar>
    </div>
  );
};
const mapStateToProps = state => {
  console.log(state);
  return {};
};

export default connect(mapStateToProps)(Navbars);
