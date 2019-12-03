import React, { Component } from "react";
import {
  Container,
  Jumbotron,
  Form,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  Button
} from "reactstrap";

export default class Register extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Register Form</h1>
          <Form>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="Enter your username here!"
                required
              />
              <FormFeedback valid>Sweet! that name is available</FormFeedback>
              <FormFeedback invalid>
                Oh noes! that name is already taken
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name here"
              />
            </FormGroup>
            <FormGroup>
              <Label for="surname">Surname</Label>
              <Input
                type="text"
                name="surname"
                id="surname"
                placeholder="Enter your surname here"
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email here!"
                required
              />
              <FormFeedback valid></FormFeedback>
              <FormFeedback invalid>
                Oh noes! that email is already registered
              </FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Enter password here!"
                minLength="6"
                required
              />
            </FormGroup>
            <Button color="success">Submit</Button>
          </Form>
        </Jumbotron>
      </Container>
    );
  }
}
