import React, { Component } from "react";
import { Col, Row, Container, Card, CardHeader, CardBody, NavItem } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, FormText, CustomInput } from "reactstrap";
import InformationBox from "./InformationBox";
import { connect } from "react-redux";
import { createEventAction } from "../store/actions/createEventAction";
import { Redirect } from "react-router-dom";
class AdminDashboard extends Component {
  state = {
    title: "Insert Title",
    description: "Insert Event Description",
    imageUrl: "https://via.placeholder.com/150",
    eventUrl: "",
    funrunState: false,
    miniState: false,
    halfState: false,
    marathonState: false,
    public: null,
  };
  handelChange = (e) => {
    if (e.target.id === "funrun") {
      this.setState({ funrunState: !this.state.funrunState });
    } else if (e.target.id === "minimarathon") {
      this.setState({ miniState: !this.state.miniState });
    } else if (e.target.id === "halfmarathon") {
      this.setState({ halfState: !this.state.halfState });
    } else if (e.target.id === "marathon") {
      this.setState({ marathonState: !this.state.marathonState });
    } else {
      this.setState({ [e.target.id]: e.target.value });
    }
  };
  handelSubmit = (e) => {
    e.preventDefault();
    this.props.createEvent(this.state);
  };
  render() {
    const { auth } = this.props;

    if (auth.isLoaded) {
      if (!auth["admin"]) return <Redirect to="/runrena" />;
      return (
        <div className="admin-page">
          <Container>
            <Row>
              <Col md="1"></Col>
              <Col md="7">
                <Card>
                  <CardHeader>
                    <h4>Create Event</h4>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={this.handelSubmit}>
                      <FormGroup>
                        <Label for="titleEvent">Event Name</Label>
                        <Input
                          type="text"
                          name="titleEvent"
                          id="title"
                          placeholder="Covid 19-KM Virtual Run"
                          onChange={this.handelChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="descriptionEvent">Description</Label>
                        <Input
                          type="textarea"
                          name="descriptionEvent"
                          id="description"
                          placeholder="Covid 19-KM Virtual Run"
                          onChange={this.handelChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="exampleCheckbox">Categories</Label>
                        <div>
                          <CustomInput type="checkbox" id="funrun" label="Fun Run (5KM)" onChange={this.handelChange} />
                          <CustomInput
                            type="checkbox"
                            id="minimarathon"
                            label="Mini Marathon (10KM)"
                            onChange={this.handelChange}
                          />
                          <CustomInput
                            type="checkbox"
                            id="halfmarathon"
                            label="Half Marathon (21KM)"
                            onChange={this.handelChange}
                          />
                          <CustomInput
                            type="checkbox"
                            id="marathon"
                            label="Marathon (42KM)"
                            onChange={this.handelChange}
                          />
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label for="imageUrl">Image URL :</Label>
                        <Input
                          type="text"
                          name="titleEvent"
                          id="imageUrl"
                          placeholder="Image URL"
                          onChange={this.handelChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="eventUrl">Event URL:</Label>
                        <Input
                          type="text"
                          name="titleEvent"
                          id="eventUrl"
                          placeholder="Event URL"
                          onChange={this.handelChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="eventUrl">Date Public :</Label>
                        <Input
                          type="date"
                          name="public"
                          id="public"
                          placeholder="Event URL"
                          onChange={this.handelChange}
                        />
                      </FormGroup>
                      <Button className="btn-block">Submit</Button>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col md="3" className="admin-page-information">
                <InformationBox eventData={this.state} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (eventData) => dispatch(createEventAction(eventData)),
  };
};
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.profile,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminDashboard);
