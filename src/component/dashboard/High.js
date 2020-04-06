import React, { Component } from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { Redirect } from "react-router-dom";
import { friendAction } from "../store/actions/friendAction";
class High extends Component {
  componentDidMount() {
    this.props.friendAction(this.props.auth.uid);
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;
    return <div>{this.props.friend ? <Dashboard name={this.props.friend} /> : null}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    friend: state.friend.friend,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    friendAction: (userId) => dispatch(friendAction(userId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(High);
