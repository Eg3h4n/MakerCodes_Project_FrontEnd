import React, { Component } from "react";
import { Container, Jumbotron } from "reactstrap";
import LoginForm from "../LoginForm";
import { connect } from "react-redux";
import { login } from "../../actions";

class Login extends Component {
  onFormSubmit = async formValues => {
    await this.props.login(formValues.email, formValues.password);

    //console.log(this.props.user);

    //sessionStorage.setItem("Authorization", this.props.token);

    //this.props.push("/dashboard");

    //console.log(this.props.token);
  };

  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Login Form</h1>
          <LoginForm onSubmit={this.onFormSubmit} />
        </Jumbotron>
      </Container>
    );
  }
}

/* const mapStateToProps = state => {
  return {
    //token: state.login.token
    //user: state.login.user
  };
}; */

export default connect(null, { login })(Login);
