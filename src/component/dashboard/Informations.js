import React from "react";
import { Card, CardFooter, CardBody, CardTitle, CardText, CardLink, CardSubtitle } from "reactstrap";
const Information = props => {
  return (
    <div>
      <Card className="mt-5">
        <CardBody>
          <CardTitle>
            <p>Running Event</p>
          </CardTitle>
          <CardSubtitle>
            <p className="font-weight-bold ">Run to the World 2020</p>
          </CardSubtitle>
        </CardBody>
        <img
          width="100%"
          src="https://storage.googleapis.com/s.race.thai.run/events/5e19521142f3fcf4780ead1a/media/bbb0df21-4985-4693-8d8e-459219241c0a.jpg"
          alt="runing"
        />
        <CardBody>
          <CardText>
            #THAIRUN #Thai Life Insurance and #SUUNTO invite you to run Run To The World 2020 (a virtual run 10km run)
            program that makes you part of a world-class marathon.
          </CardText>
          <CardLink href="#">Join</CardLink>
          <CardLink href="#">Description</CardLink>
          <CardText>Notification</CardText>
          <li>Notification</li>
          <li>Notification</li>
          <li>Notification</li>
          <li>Notification</li>
        </CardBody>
        <CardFooter className="text-center">runrena 2020</CardFooter>
      </Card>
    </div>
  );
};

export default Information;
