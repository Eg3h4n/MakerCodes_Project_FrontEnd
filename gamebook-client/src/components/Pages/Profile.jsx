import React, { Component } from "react";
import { Container } from "reactstrap";
import NavComp from "../NavComp";

export default class Profile extends Component {
  render() {
    //console.log(this.props);
    return (
      <Container>
        <NavComp />
        This is {this.props.match.params.username}'s profile
      </Container>
    );
  }
}
