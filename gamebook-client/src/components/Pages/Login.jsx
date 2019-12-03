import React, { Component } from "react";
import {
  Container,
  Jumbotron,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Jumbotron>
          <Form>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email here!"
                required
              />
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
            <Button color="success">Login</Button>
          </Form>
        </Jumbotron>
      </Container>
    );
  }
}
