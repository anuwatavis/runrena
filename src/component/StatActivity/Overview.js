import React, { Component } from "react";
import { Card, Row, Col, CardHeader } from "reactstrap";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import ChartCompare from "./ChartCompare";
import { connect } from "react-redux";
import { activityStat } from "../store/actions/activityStatAction";
import { userDataAction } from "../store/actions/userDataAction";
class Overview extends Component {
  componentWillMount() {
    this.props.friendData(this.props.friend);
  }
  componentDidMount() {
    this.props.activityData(this.props.friend);
    //this.props.friendData(this.props.friend);
  }

  render() {
    const { activities, friend, friendFollowerData } = this.props;
    return (
      <div className="container mt-2">
        <Card>
          <CardHeader>Overview</CardHeader>
          <Row className="align-items-center">
            <Col md="9"></Col>
            <Col md="3" className="text-center">
              <div className="mt-2">
                <DayPickerInput />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              {activities ? (
                <ChartCompare activities={activities} friend={friend} friendFollowerData={friendFollowerData} />
              ) : null}
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    activityData: (friendList) => dispatch(activityStat(friendList)),
    friendData: (friendList) => dispatch(userDataAction(friendList)),
  };
};

const mapStateToProps = (state) => {
  return {
    activities: state.activitiesStat.activityStat,
    friendFollowerData: state.userData.users,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Overview);
