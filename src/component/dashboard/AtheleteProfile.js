import React from "react";
import { Card, Button, CardHeader, CardFooter, CardBody, CardTitle, CardText } from "reactstrap";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
const AtheleteProfile = () => {
  return (
    <div>
      <Card className="athelete-profile-card">
        <Link to="/anuwat">
          <div className="avatar-flex">
            <Avatar
              name="Anu Wat"
              size="100"
              round={true}
              src="https://www.outsideonline.com/sites/default/files/styles/img_600x600/public/2019/05/08/kichoge-winning-london_s.jpg?itok=oiezBvCc"
            />
          </div>
        </Link>

        <CardBody className="text-center">
          <CardTitle>
            <h4>Anu Wat</h4>
          </CardTitle>
          <CardText>
            <ul className="list-stat text-center">
              <li>
                <a href="#" className="stat">
                  <div className="stat-subtext">Following</div>
                  <h2 className="stat-text">1</h2>
                </a>
              </li>
              <li>
                <a href="#" className="stat">
                  <div className="stat-subtext">Follower</div>
                  <h2 className="stat-text">1</h2>
                </a>
              </li>
              <li>
                <a href="#" className="stat">
                  <div className="stat-subtext">Activities</div>
                  <h2 className="stat-text">1</h2>
                </a>
              </li>
            </ul>
          </CardText>
        </CardBody>
        <CardFooter>
          <div className="card-section">
            <div className="text-label text-small">Latest Activity</div>
            <div className="text-small">Afternoon Run • March 1, 2020</div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AtheleteProfile;
