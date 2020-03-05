import React, { Component } from "react";
import { Form, FormGroup, Label, Input, FormText, Card, CardTitle, CardBody, CardHeader } from "reactstrap";
class CreateActivities extends Component {
  render() {
    return (
      <div>
        <Card className="mb-5 mt-5 ">
          <CardHeader id="test">Post</CardHeader>
          <CardBody className="upload-activity">
            <CardTitle>
              <h2>Upload Activities</h2>
            </CardTitle>
            <Form>
              <FormGroup>
                <Label for="titleActivity">Title Activity</Label>
                <Input type="email" name="email" id="titleActivity" placeholder="Bang Khun Running" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input type="file" name="file" id="exampleFile" />
                <FormText color="muted">Please, Upload your tcx file</FormText>
              </FormGroup>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default CreateActivities;
