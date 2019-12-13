import React, { Component } from "react";
import { connect } from "react-redux";
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
  Col,
  CardColumns
} from "reactstrap";
import NavComp from "../NavComp";
import { getProfile } from "../../actions";
import ProfileGame from "../ProfileGame";
import Footer from "../Footer";

class Profile extends Component {
  componentDidMount() {
    const userToken = sessionStorage.getItem("Authorization");

    this.props.getProfile(this.props.match.params.username, userToken);
  }

  renderGames = () => {
    const renderedGames = this.props.profile.games.map(game => {
      return <ProfileGame key={game._id} game={game} />;
    });
    return renderedGames;
  };

  render() {
    if (Array.isArray(this.props.profile.games)) {
      var renderedGames = this.renderGames();
    }
    //console.log(this.props);
    return (
      <Container>
        <NavComp />
        <Jumbotron>
          <Row>
            <Col xs="3">
              <img
                src={this.props.profile.avatarURL}
                alt="avatar"
                height="auto"
                width="auto"
                className="img-thumbnail rounded"
              />
            </Col>
            <Col xs="9">
              <Card>
                <CardHeader>
                  <h1>{this.props.profile.username}</h1>
                </CardHeader>
                <CardBody>
                  <CardTitle>
                    {this.props.profile.name} {this.props.profile.surname}
                  </CardTitle>
                  <CardText>{this.props.profile.email}</CardText>
                </CardBody>
                <CardFooter>
                  Member Since: {this.props.profile.memberSince}
                </CardFooter>
              </Card>
            </Col>
          </Row>
          <hr />
          <h1 className="text-center">GAMES</h1>
          <CardColumns>
            {Array.isArray(this.props.profile.games)
              ? renderedGames
              : "loading"}
          </CardColumns>
        </Jumbotron>
        <Footer />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    profile: state.profile
  };
};

export default connect(mapStateToProps, { getProfile })(Profile);
