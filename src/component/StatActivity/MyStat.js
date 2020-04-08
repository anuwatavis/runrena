import React, { Component } from "react";
import { Card, CardBody, Row, Col, CardHeader } from "reactstrap";
import TableStat from "./TableStat";
import TableDayActivity from "./TableDayActivity";
import Helmet from "react-helmet";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { getUserActivityByDateAction } from "../store/actions/getUserActivityByDateAction";
import { connect } from "react-redux";
class MyStat extends Component {
  static defaultProps = {
    numberOfMonths: 1,
  };

  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    this.state = this.getInitialState();
  }

  getInitialState = () => {
    var today = new Date();
    return {
      from: null,
      to: null,
    };
  };

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
    let dateTimeAndUserId = [this.props.userId];
    dateTimeAndUserId.push(range);
    this.props.getActivityUserByDate(dateTimeAndUserId);
  };

  handleResetClick() {
    this.setState(this.getInitialState());
  }
  render() {
    const { userId } = this.props;
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="container mt-2 mb-5">
        <Card>
          <CardHeader>My Stat</CardHeader>
          <CardBody>
            <Row className="align-items-center">
              <Col md="3">
                <div className="">
                  <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                  />
                  <Helmet>
                    <style>{`
                            .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                              background-color: #f0f8ff !important;
                              color: #4a90e2;
                            }
                            .Selectable .DayPicker-Day {
                              border-radius: 0 !important;
                            }
                            .Selectable .DayPicker-Day--start {
                              border-top-left-radius: 50% !important;
                              border-bottom-left-radius: 50% !important;
                            }
                            .Selectable .DayPicker-Day--end {
                              border-top-right-radius: 50% !important;
                              border-bottom-right-radius: 50% !important;
                            }
                          `}</style>
                  </Helmet>
                </div>
              </Col>
              <Col md="4">
                <div className="">
                  {this.props.activityUserByDate ? (
                    <TableDayActivity className="mb-6" activityUserByDate={this.props.activityUserByDate} />
                  ) : null}
                </div>
              </Col>
              <Col md="5">
                <TableStat userId={userId} />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    userId: state.firebase.auth.uid,
    activityUserByDate: state.activityUserByDate.activitiesUserByDate,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { getActivityUserByDate: (dateAndUserId) => dispatch(getUserActivityByDateAction(dateAndUserId)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(MyStat);
