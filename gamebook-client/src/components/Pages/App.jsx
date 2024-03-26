import React, { Component } from "react";
import { Container, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import LoginForm from "../LoginForm";

export default class App extends Component {
  render() {
    return (
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        fluid
        style={{ height: "100vh" }}
      >
        <h1 className="m-5" style={{ color: "white" }}>
          Welcome to Note Vault!
        </h1>

        <Row>
          <Link to="/privacy">
            <Button color="success" size="lg">
              Privacy Policy
            </Button>
          </Link>
        </Row>
        <Row>
          <LoginForm />
        </Row>

        <Footer />
      </Container>
    );
  }
}
