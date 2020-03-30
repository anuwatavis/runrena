import React, { Component } from "react";
import Papa from "papaparse";
import { Form, FormGroup, Label, Input, Card, CardBody, Button, CustomInput, CardHeader, CardTitle } from "reactstrap";
import ActivityData from "./ActivityData";
class UploadTest extends Component {
  state = {
    titleActivity: null,
    totalTime: null,
    totalDistance: null,
    averagePace: null,
    averageElevation: null,
    totalCalories: null,
    averageHr: null,
    averageCadence: null
  };
  handelFile = e => {
    let file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: this.updateData
    });
  };

  updateData = result => {
    let data = result.data;
    let count = data.length;
    let summary = data[count - 1];
    this.setState({
      totalTime: summary["Time"],
      totalDistance: summary["Distance"],
      averagePace: summary["Avg Pace"],
      averageElevation: summary["Elev Gain"],
      totalCalories: summary["Calories"],
      averageHr: summary["Avg HR"],
      averageCadence: summary["Avg Run Cadence"]
    });
  };
  handelTitleChange = e => {
    this.setState({ titleActivity: e.target.value });
  };
  render() {
    return (
      <div>
        <Card>
          <CardHeader id="test">Post</CardHeader>
          <CardBody className="upload-activity">
            <CardTitle>
              <h2>Upload Activity</h2>
            </CardTitle>
            <Form>
              <FormGroup>
                <Label for="titleActivity">Title Activity</Label>
                <Input
                  type="text"
                  name="title-activity"
                  id="titleActivity"
                  placeholder="Bang Khun Running"
                  required
                  onChange={this.handelTitleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="FileBrowser">Upload</Label>
                <CustomInput
                  type="file"
                  id="FileBrowser"
                  name="customFile"
                  label="activity.csv"
                  onChange={this.handelFile}
                  required
                />
              </FormGroup>
              {this.state.totalTime ? <ActivityData activityData={this.state} /> : null}
              <Button className="mt-2 float-right">Post</Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default UploadTest;
