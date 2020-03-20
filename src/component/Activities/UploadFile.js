import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Card, CardBody, Button, CustomInput, CardHeader, CardTitle } from "reactstrap";
import axios from "axios";
import Message from "./Message";
import Progressbar from "./Progress";
import { connect } from "react-redux";
import { createActivity } from "../store/actions/activityAction";
import ActivityData from "./ActivityData";

const UploadFile = ({ createActivity }) => {
  const [filename, setFilename] = useState("Choose File");
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [activityData, setActivity] = useState({});
  const [titleActivity, setTitleActivity] = useState("");
  const onChange = async e => {
    e.preventDefault();
    console.log(e.target.files);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    console.log(formData);
    try {
      const res = await axios.post("/upload", formData, {
        headers: {
          "Content-type": "multipart/form-data"
        },
        onUploadProgress: progressEvent => {
          setUploadPercentage(parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total)));
        }
      });
      const {
        totalTime,
        totalDistance,
        averagePace,
        averageElevation,
        totalCalories,
        averageHr,
        averageCadence
      } = res.data;
      setActivity({
        totalTime,
        totalDistance,
        averagePace,
        averageElevation,
        totalCalories,
        averageHr,
        averageCadence,
        titleActivity
      });
      setMessage("File Uploader");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };
  const onChangeTitle = e => {
    setTitleActivity(e.target.value);
  };
  const handelSubmit = e => {
    e.preventDefault();
    if (activityData.titleActivity === "") {
      activityData.titleActivity = titleActivity;
    }
    createActivity(activityData);
  };

  return (
    <div>
      <Card>
        <CardHeader id="test">Post</CardHeader>
        <CardBody className="upload-activity">
          <CardTitle>
            <h2>Upload Activity</h2>
          </CardTitle>
          {message ? <Message msg={message} /> : null}
          <Form onSubmit={handelSubmit} id="create-course-form">
            <FormGroup>
              <Label for="titleActivity">Title Activity</Label>
              <Input
                type="text"
                name="title-activity"
                id="titleActivity"
                placeholder="Bang Khun Running"
                onChange={onChangeTitle}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="FileBrowser">{filename}</Label>
              <CustomInput
                type="file"
                id="FileBrowser"
                name="customFile"
                onChange={onChange}
                label="activity.csv"
                required
              />
            </FormGroup>
            <Progressbar percentage={uploadPercentage} />
            <ActivityData activityData={activityData} />
            <Button className="mt-2 float-right">Post</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    createActivity: activity => dispatch(createActivity(activity))
  };
};
export default connect(null, mapDispatchToProps)(UploadFile);
