import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
const ActivitiesDetails = () => {
  return (
    <div>
      <Card className="activity feed-entry">
        <CardBody>
          <div className="entry-header">
            <div className="media media-middel">
              <div className="media-left">
                <h5>Anu Wat</h5>
              </div>
              <div className="media-body">
                <a href="">Anuwat</a>
                <p>Yesterday at 7:16</p>
              </div>
            </div>
          </div>{" "}
          <div className="entry-body">
            <div className="media">
              <div className="entry-icon media-left"></div>
              <div className="media-left">
                <h3 className="title-text">Morning Run</h3>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ActivitiesDetails;
