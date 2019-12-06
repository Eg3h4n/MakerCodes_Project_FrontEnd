import React, { Component } from "react";
import { Container } from "reactstrap";
import { getUser } from "../../actions";
import { connect } from "react-redux";
import NavComp from "../NavComp";

class Dashboard extends Component {
  componentDidMount() {
    const userToken = sessionStorage.getItem("Authorization");
    //console.log(sessionStorage.getItem("Authorization"));
    this.props.getUser(userToken);
  }

  render() {
    return (
      <Container>
        <NavComp />
        this is {this.props.user.username}'s dashboard
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
