import React, { Component } from "react";
import { Container, Jumbotron } from "reactstrap";
import LoginForm from "../LoginForm";
import { connect } from "react-redux";
import { login } from "../../actions";

class Login extends Component {
  onFormSubmit = async formValues => {
    await this.props.login(formValues.email, formValues.password);

    this.props.history.push("/dashboard");
    console.log(this.props);
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

export default connect(null, { login })(Login);
