import React, { Component } from "react";
import { connect } from "react-redux";
import { steamLogin } from "../../actions";

class Steam extends Component {
  componentDidMount() {
    this.props.steamLogin();
  }
  render() {
    return <div></div>;
  }
}

export default connect(null, { steamLogin })(SteamLogin);
