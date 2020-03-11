import React, { useState } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Card,
  CardBody,
  Button,
  CustomInput,
  CardHeader,
  Badge,
  CardTitle
} from "reactstrap";
import axios from "axios";
import Message from "./Message";
import Progressbar from "./Progress";

import ActivityData from "./ActivityData";

const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [activityData, setActivity] = useState({});
  const [titleActivity, setTitleActivity] = useState("");

  const onChange = e => {
    console.log(e.target.files);
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  const onChangeTitle = e => {
    setTitleActivity(e.target.value);
  };
  const handelUploadFile = async e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
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
  const handelSubmit = e => {
    e.preventDefault();
    console.log(titleActivity);
    document.getElementById("create-course-form").reset();
    console.log(activityData);
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
                label="activity.tcx"
                required
              />
            </FormGroup>
            <Progressbar percentage={uploadPercentage} />
            <ActivityData activityData={activityData} />
            <Button className="mt-2" onClick={handelUploadFile}>
              Upload File
            </Button>
            <Button className="mt-2 float-right">Post</Button>
          </Form>
        </CardBody>
      </Card>
      {/* {activityData ? (
        <div className="row mt-5">
          <div className="col-md-6">
            <Badge color="secondary">{activityData.totalTime}</Badge>
            <Badge color="secondary">{activityData.totalTime}</Badge>
            <Badge color="secondary">{activityData.totalTime}</Badge>
            <Badge color="secondary">{activityData.totalTime}</Badge>
            <Badge color="secondary">{activityData.totalTime}</Badge>
          </div>
        </div>
      ) : null} */}
    </div>
  );
};

export default UploadFile;
