import React, { Fragment, useState } from "react";
import { Form, FormGroup, Label, Input, FormText, Card, CardBody, Button } from "reactstrap";
import axios from "axios";
import Message from "./Message";
import Progress from "./Progress";
const UploadFile = () => {
  const [file, setFile] = useState(null);
  const [filename, setFilename] = useState("Choose Filess");
  const [uploadedFile, setUploadedFile] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);

  const onChange = e => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  const onSubmit = async e => {
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
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
      setMessage("File Uploader");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
    }
  };

  return (
    <div>
      {message ? <Message msg={message} /> : null}
      <Card>
        <CardBody>
          <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="customfile">{filename}</Label>
              <Input type="file" name="file" id="customfile" onChange={onChange} />
              <FormText color="muted">
                This is some placeholder block-level help text for the above input. It's a bit lighter and easily wraps
                to a new line.
              </FormText>
            </FormGroup>
            <Progress percentage={uploadPercentage} />
            <Button>Submit</Button>
          </Form>
        </CardBody>
      </Card>
      {uploadedFile ? (
        <div className="row mt-5">
          <div className="col-md-6 m-auto">
            <h3 className="text-center">{uploadedFile.fileName}</h3>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UploadFile;
