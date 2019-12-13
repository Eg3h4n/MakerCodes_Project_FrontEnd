import React, { Component } from "react";
import { Container, Jumbotron, Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import { connect } from "react-redux";
import { steamLogin } from "../../actions";

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
              {/* <Link to="/steam"> */}
              <Button className="p-0" onClick={() => this.props.steamLogin()}>
                <img
                  src="https://steamcommunity-a.akamaihd.net/public/images/signinthroughsteam/sits_02.png"
                  alt="steam button"
                  border="0"
                />
              </Button>
              {/* </Link> */}
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

export default connect(null, { steamLogin })(App);
