import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions";
import { Container, Jumbotron } from "reactstrap";
import RegisterForm from "../RegisterForm";

class Register extends Component {
  onFormSubmit = async formValues => {
    await this.props.register(
      formValues.username,
      formValues.name,
      formValues.surname,
      formValues.email,
      formValues.password
    );

    this.props.history.push("/dashboard");
    console.log(this.props);
  };
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Register Form</h1>
          <RegisterForm onSubmit={this.onFormSubmit} />
        </Jumbotron>
      </Container>
    );
  }
}

export default connect(null, { register })(Register);
