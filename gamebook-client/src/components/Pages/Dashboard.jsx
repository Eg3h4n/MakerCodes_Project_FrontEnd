import React, { Component } from "react";
import {
  Container,
  Jumbotron,
  Card,
  CardHeader,
  CardBody,
  CardText,
  CardTitle,
  CardFooter,
  Row,
  Col
} from "reactstrap";
import { getUser } from "../../actions";
import { connect } from "react-redux";
import NavComp from "../NavComp";

class Dashboard extends Component {
  async componentDidMount() {
    const userToken = await sessionStorage.getItem("Authorization");
    //console.log(sessionStorage.getItem("Authorization"));
    this.props.getUser(userToken);
  }

  render() {
    return (
      <Container>
        <NavComp />
        <Jumbotron>
          <Row>
            <Col xs="3">
              <img
                src={this.props.user.avatarURL}
                alt="avatar"
                height="auto"
                width="auto"
                className="img-thumbnail rounded"
              />
            </Col>
            <Col xs="9">
              <Card>
                <CardHeader>
                  <h1>{this.props.user.username}</h1>
                </CardHeader>
                <CardBody>
                  <CardTitle>
                    {this.props.user.name} {this.props.user.surname}
                  </CardTitle>
                  <CardText>{this.props.user.email}</CardText>
                </CardBody>
                <CardFooter>
                  Member Since: {this.props.user.memberSince}
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <hr />
          <h1 className="text-center">Manage Games</h1>
        </Jumbotron>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { getUser })(Dashboard);
