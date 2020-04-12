import React, { Component } from "react";
import ChartWeekReport from "../dashboard/ChartWeekReport";
import { connect } from "react-redux";
import { weekQueryAction } from "../store/actions/weekQueryAction";
class WeekReport extends Component {
  componentDidMount = () => {
    var today = new Date();
    var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    let dateTimeAndUserId = [];
    let dateOfWeek = new Date(date);
    let numberForStart = dateOfWeek.getDay();
    let numberForEnd = 6 - dateOfWeek.getDay();
    let start = new Date(dateOfWeek);
    start.setDate(start.getDate() - numberForStart);
    let end = new Date(dateOfWeek);
    end.setDate(end.getDate() + numberForEnd + 1);
    dateTimeAndUserId.push(start);
    dateTimeAndUserId.push(end);
    dateTimeAndUserId.push(this.props.auth);
    //console.log("WeekReport -> componentDidMount -> dateTimeAndUserId", dateTimeAndUserId);
    this.props.weekActivity(dateTimeAndUserId);
  };
  render() {
    return <div>{this.props.activityByWeek ? <ChartWeekReport activities={this.props.activityByWeek} /> : null}</div>;
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  //console.log(state);
  return {
    auth: state.firebase.auth.uid,
    activityByWeek: state.activitiesUserByWeek.activitiesByWeek,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    weekActivity: (dateAndUserId) => dispatch(weekQueryAction(dateAndUserId)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(WeekReport);
