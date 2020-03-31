import React, { Component } from "react";
import { Card, Row, Col, Badge, CardHeader, Input, FormGroup, Label, Button, Form } from "reactstrap";
import { connect } from "react-redux";
import Myprofile from "./MyProfile";
import MyProfile from "./MyProfile";
class MyProfilePage extends Component {
  render() {
    return <div>{this.props.profile.firstName ? <MyProfile profile={this.props.profile} /> : null}</div>;
  }
}
const mapStateToProps = state => {
  console.log(state);
  return {
    profile: state.firebase.profile
  };
};
export default connect(mapStateToProps, null)(MyProfilePage);
