import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions";
import { Container, Jumbotron } from "reactstrap";
import RegisterForm from "../RegisterForm";
import Footer from "../Footer";
//import { push } from "connected-react-router";

class Register extends Component {
  onFormSubmit = async formValues => {
    await this.props.register(
      formValues.username,
      formValues.name,
      formValues.surname,
      formValues.email,
      formValues.password,
      sessionStorage.getItem("Authorization")
    );

    //sessionStorage.setItem("Authorization", this.props.token);
    //this.props.push("/dashboard");
    //console.log(this.props);
  };
  render() {
    return (
      <Container>
        <Jumbotron>
          <h1>Register Form</h1>
          <RegisterForm onSubmit={this.onFormSubmit} />
        </Jumbotron>
        <Footer />
      </Container>
    );
  }
}

/* const mapStateToProps = state => {
  return {
    //token: state.register,
    //user: state.user
  };
}; */

export default connect(null, { register })(Register);
