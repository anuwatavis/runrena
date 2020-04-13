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
                <Avatar
                  name="Anu Wat"
                  size="100"
                  round={true}
                  src="https://scontent.fbkk22-2.fna.fbcdn.net/v/t1.0-9/87287930_2748180665269123_8190842520003936256_o.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_eui2=AeGa4n_O6c0qXTCgeZYbT3UiVyRdgPmVFEhXJF2A-ZUUSIYLMcR-b3FzwjszrG6T25GW55Y2ZwfUfoKSX0iu7AIP&_nc_ohc=hFGW2OFHd3QAX8dSDvt&_nc_ht=scontent.fbkk22-2.fna&oh=4ef687e3eccb2a73a1ae0343546c25ec&oe=5EBA4735"
                />
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
