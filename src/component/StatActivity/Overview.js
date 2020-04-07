import React, { Component } from "react";
import { Card, Row, Col, CardHeader } from "reactstrap";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import ChartCompare from "./ChartCompare";
import { connect } from "react-redux";
import { activityStat } from "../store/actions/activityStatAction";
import { userDataAction } from "../store/actions/userDataAction";
import { queryByTime } from "../store/actions/queryByTime";

class Overview extends Component {
  state = {
    selectedDay: null,
  };

  handleDayChange = (selectedDay, modifiers, dayPickerInput) => {
    const input = dayPickerInput.getInput();
    let dateTimeAndFriendList = [this.props.friend];
    dateTimeAndFriendList.push(input.value);
    this.props.queryByTime(dateTimeAndFriendList);
  };
  componentWillMount() {
    this.props.friendData(this.props.friend);
  }
  componentDidMount() {
    this.props.activityData(this.props.friend);
    //this.props.friendData(this.props.friend);
    var today = new Date();
    var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    let dateTimeAndFriendList = [this.props.friend];
    dateTimeAndFriendList.push(date);
    this.props.queryByTime(dateTimeAndFriendList);
  }

  render() {
    const { activities, friend, friendFollowerData, activityByDate } = this.props;
    const { selectedDay, isDisabled, isEmpty } = this.state;
    return (
      <div className="container mt-2">
        <Card>
          <CardHeader>Overview</CardHeader>
          <Row className="align-items-center">
            <Col md="9"></Col>
            <Col md="3" className="text-center">
              <div className="mt-2">
                <DayPickerInput
                  value={selectedDay}
                  onDayChange={this.handleDayChange}
                  dayPickerProps={{
                    selectedDays: selectedDay,
                  }}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              {activityByDate ? (
                <ChartCompare activities={activityByDate} friend={friend} friendFollowerData={friendFollowerData} />
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
    queryByTime: (dateTimeAndFriendList) => dispatch(queryByTime(dateTimeAndFriendList)),
  };
};

const mapStateToProps = (state) => {
  return {
    activities: state.activitiesStat.activityStat,
    friendFollowerData: state.userData.users,
    activityByDate: state.activityByDate.activitiesByDate,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Overview);
