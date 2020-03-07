import React, { Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardTitle,
  CardBody,
  CardHeader,
  Button,
  Row,
  Col
} from "reactstrap";
import { connect } from "react-redux";
import { createActivity } from "../store/actions/activityAction";
class CreateActivities extends Component {
  state = {
    id: 10,
    titleActivity: "",
    distanceActivity: "null",
    paceActivity: "null",
    fileUpload: null,
    timeActivity: "null"
  };
  handelChange = e => {
    console.log(e.target.id);
    if (e.target.id === "titleActivity") {
      this.setState({ titleActivity: e.target.value });
    } else {
      this.setState({
        [e.target.id]: parseFloat(e.target.value)
      });
    }
  };

  handelChangeFile = e => {
    this.setState({
      fileUpload: e.target.files[0]
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    console.log(e);
    this.props.createActivity(this.state);
    document.getElementById("create-course-form").reset();
  };

  render() {
    return (
      <div>
        <Card className="mb-5 mt-5 ">
          <CardHeader id="test">Post</CardHeader>
          <CardBody className="upload-activity">
            <CardTitle>
              <h2>Upload Activity</h2>
            </CardTitle>
            <Form onSubmit={this.handelSubmit} id="create-course-form">
              <FormGroup>
                <Label for="titleActivity">Title Activity</Label>
                <Input
                  type="text"
                  name="title-activity"
                  id="titleActivity"
                  placeholder="Bang Khun Running"
                  onChange={this.handelChange}
                  required
                />
              </FormGroup>
              <Row>
                <Col md="4">
                  <FormGroup>
                    <Label for="distanceActivity">Distance</Label>
                    <Input
                      type="number"
                      name="total-distance"
                      id="distanceActivity"
                      placeholder="21 KM"
                      onChange={this.handelChange}
                      step="0.01"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label for="paceActivity">Pace</Label>
                    <Input
                      type="number"
                      name="total-pace"
                      id="paceActivity"
                      placeholder="2.50 / KM"
                      onChange={this.handelChange}
                      step="0.01"
                      required
                    />
                  </FormGroup>
                </Col>
                <Col md="4">
                  <FormGroup>
                    <Label for="timeActivity">Time</Label>
                    <Input
                      type="number"
                      name="title-distance"
                      id="timeActivity"
                      placeholder="50 Min"
                      onChange={this.handelChange}
                      step="0.01"
                      required
                    />
                  </FormGroup>
                </Col>
              </Row>

              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="fileUpload" onChange={this.handelChangeFile} />
                <FormText color="muted">Please, Upload your tcx file</FormText>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createActivity: activity => dispatch(createActivity(activity))
  };
};

export default connect(null, mapDispatchToProps)(CreateActivities);
