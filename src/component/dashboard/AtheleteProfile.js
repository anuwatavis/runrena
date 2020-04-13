import React from "react";
import { Card, CardFooter, CardBody, CardTitle, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";
import { connect } from "react-redux";
const AtheleteProfile = ({ profile, auth }) => {
  return (
    <div>
      <Card className="athelete-profile-card">
        <Row>
          <Col md="12">
            <Link to={"/runner/" + auth.uid}>
              <div className="avatar-flex">
                {typeof profile.profileUrl != "undefined" && profile.profileUrl.length <= 2 ? (
                  <Avatar className="mb-2" name={profile.firstName + " " + profile.lastName} size="100" round={true} />
                ) : null}

                {typeof profile.profileUrl != "undefined" && profile.profileUrl.length > 2 ? (
                  <Avatar
                    className="mb-2"
                    name={profile.firstName + " " + profile.lastName}
                    size="100"
                    round={true}
                    src={profile.profileUrl}
                  />
                ) : null}
              </div>
            </Link>
          </Col>
        </Row>
        <CardBody className="text-center">
          <Row>
            <Col md="12">
              <CardTitle>
                <h4>{profile.firstName}</h4>
              </CardTitle>
            </Col>
            <Col md="12">
              <Row>
                <Col md="4">
                  <div className="text-small">Following</div>
                  <div className="stat-profile">
                    <p>{profile.following}</p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="text-small">Follower</div>
                  <div className="stat-profile">
                    <p>{profile.followers}</p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="text-small">Activities</div>
                  <div className="stat-profile">
                    <p>{profile.activities}</p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
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

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth,
  };
};
export default connect(mapStateToProps)(AtheleteProfile);
