import React, { Component } from "react";
import { Card, CardFooter, CardBody, CardTitle, CardText, CardLink, CardSubtitle } from "reactstrap";
import { connect } from "react-redux";
import { getEventAction } from "../store/actions/getEventAction";
class Informations extends Component {
  componentDidMount = () => {
    this.props.getEvent("date from information");
  };
  render() {
    const { eventData } = this.props;
    if (eventData && eventData.length > 0) {
      return (
        <div>
          <Card className="mt-5">
            <CardBody>
              <CardTitle>
                <p className="running-event-title">Running Event</p>
              </CardTitle>
              <CardSubtitle>
                {eventData ? (
                  <p className="font-weight-bold text-center running-event-subtitle">{eventData[0].title}</p>
                ) : null}
              </CardSubtitle>
            </CardBody>
            {eventData ? <img width="100%" src={eventData[0].imageUrl} alt="runing" /> : null}

            <CardBody>
              {eventData ? <CardText className="running-event-description">{eventData[0].description}</CardText> : null}
              {eventData && eventData[0].funRun ? (
                <li className="mt-0 mb-0 running-event-categories">Fun Run (5KM)</li>
              ) : null}
              {eventData && eventData[0].miniMarathon ? (
                <li className="mt-0 mb-0 running-event-categories">Mini Marathon (10KM)</li>
              ) : null}
              {eventData && eventData[0].halfMarathon ? (
                <li className="mt-0 mb-0 running-event-categories">Half Marathon (21KM)</li>
              ) : null}
              {eventData && eventData[0].marathon ? (
                <li className="mt-0 mb-0 running-event-categories">Marathon (42KM)</li>
              ) : null}
              {eventData ? (
                <CardLink href={eventData[0].eventUrl} target="_blank">
                  <p className="mt-2 text-center mb-0">More & Register</p>
                </CardLink>
              ) : null}
            </CardBody>
            <CardFooter className="text-center">Runreana 2020</CardFooter>
          </Card>
        </div>
      );
    } else {
      return null;
    }
  }
}
const mapStateToProps = (state) => {
  return {
    eventData: state.eventReducer.events,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { getEvent: (date) => dispatch(getEventAction(date)) };
};
export default connect(mapStateToProps, mapDispatchToProps)(Informations);
