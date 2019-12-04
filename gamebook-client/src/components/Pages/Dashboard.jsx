import React, { Component } from "react";
import { Container } from "reactstrap";
import { getUser } from "../../actions";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.props.getUser();
  }

  render() {
    return <Container>{this.props.user.username}</Container>;
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, { getUser })(Dashboard);
