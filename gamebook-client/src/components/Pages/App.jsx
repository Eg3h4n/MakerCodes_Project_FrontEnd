import React, { Component } from "react";
import { Container, Jumbotron, Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default class App extends Component {
  render() {
    return (
      <Container
        className="d-flex flex-column justify-content-center align-items-center"
        fluid
        style={{ height: "100vh" }}
      >
        <h1 className="m-5" style={{ color: "white" }}>
          Welcome to Gamebook!
        </h1>
        <Jumbotron
          className="d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "black" }}
        >
          <Row>
            <Col>
              <Link to="/register">
                <Button color="primary" size="lg">
                  Register
                </Button>
              </Link>
            </Col>
            <Col>
<<<<<<< HEAD
              <a href="https://intense-cove-06524.herokuapp.com/auth/steam">
=======
              <Link to="/steam">
>>>>>>> 3a090706fae9b1e6e9fa354b59f6c3a6cfa22e19
                <Button className="p-0">
                  <img
                    src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_02.png"
                    alt="steam button"
                    border="0"
                  />
                </Button>
<<<<<<< HEAD
              </a>
=======
              </Link>
>>>>>>> 3a090706fae9b1e6e9fa354b59f6c3a6cfa22e19
            </Col>
            <Col>
              <Link to="/login">
                <Button color="success" size="lg">
                  Login
                </Button>
              </Link>
            </Col>
          </Row>
        </Jumbotron>
        <Footer />
      </Container>
    );
  }
}
