import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormText, Card, CardTitle, CardBody, CardHeader, Button } from "reactstrap";
import { connect } from "react-redux";
import { createActivity } from "../store/actions/activityAction";
class CreateActivities extends Component {
  state = {
    id: 10,
    title: "",
    distance: "10 KM",
    pace: "4.50 /KM",
    km: "22",
    fileUpload: null,
    time: "29Min"
  };
  handelChange = e => {
    this.setState({
      title: e.target.value
    });
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
              <h2>Upload Activities</h2>
            </CardTitle>
            <Form onSubmit={this.handelSubmit} id="create-course-form">
              <FormGroup>
                <Label for="titleActivity">Title Activity</Label>
                <Input
                  type="text"
                  name="title-activity"
                  id="title"
                  placeholder="Bang Khun Running"
                  onChange={this.handelChange}
                />
              </FormGroup>
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
