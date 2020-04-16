import React from "react";
import { Card, CardFooter, CardBody, CardTitle, CardText, CardLink, CardSubtitle } from "reactstrap";
const InformationBox = (props) => {
  const { eventData } = props;

  return (
    <div>
      <Card className="mt-5">
        <CardBody>
          <CardTitle>
            <p className="running-event-title">Running Event</p>
          </CardTitle>
          <CardSubtitle>
            <p className="font-weight-bold text-center running-event-subtitle">{eventData.title}</p>
          </CardSubtitle>
        </CardBody>
        <img width="100%" src={eventData.imageUrl} alt="runing" />
        <CardBody>
          <CardText className="running-event-description">{eventData.description}</CardText>
          {eventData.funrunState ? <li className="mt-0 mb-0 running-event-categories">Fun Run (5KM)</li> : null}
          {eventData.miniState ? <li className="mt-0 mb-0 running-event-categories">Mini Marathon (10KM)</li> : null}
          {eventData.halfState ? <li className="mt-0 mb-0 running-event-categories">Half Marathon (21KM)</li> : null}
          {eventData.marathonState ? <li className="mt-0 mb-0 running-event-categories">Marathon (42KM)</li> : null}
          <CardLink href={eventData.eventUrl} target="_blank">
            More & Register
          </CardLink>
        </CardBody>
        <CardFooter className="text-center">Runreana 2020</CardFooter>
      </Card>
    </div>
  );
};

export default InformationBox;
