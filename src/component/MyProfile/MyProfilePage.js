import React, { Component } from "react";
import { connect } from "react-redux";
import MyProfile from "./MyProfile";
class MyProfilePage extends Component {
  render() {
    return (
      <div>
        {this.props.profile.firstName && this.props.auth ? (
          <MyProfile profile={this.props.profile} auth={this.props.auth} />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth.uid
  };
};
export default connect(mapStateToProps, null)(MyProfilePage);
