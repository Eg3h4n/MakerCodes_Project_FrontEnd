import React, { Component } from "react";
import { connect } from "react-redux";
import { register } from "../../actions";
import { Container, Jumbotron } from "reactstrap";
import Footer from "../Footer";
//import { push } from "connected-react-router";

class Register extends Component {
  onFormSubmit = async (formValues) => {
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
          <h1>Note Vault Privacy Policy</h1>

          <p>
            Thank you for choosing Note Vault (the "App"). This Privacy Policy
            describes how [Company Name] ("we," "us," or "our") collects, uses,
            and shares information when you use our App. By using the App, you
            agree to the collection and use of information in accordance with
            this Privacy Policy.
          </p>

          <h2>1. Information We Collect</h2>

          <p>
            When you register an account with the App, we collect the following
            information:
          </p>

          <ul>
            <li>
              Email address: We collect your email address to create and manage
              your account, provide customer support, and send you important
              notifications related to your account.
            </li>
            <li>
              Password: We collect your password to secure your account and
              authenticate your identity when you log in.
            </li>
          </ul>

          <h2>2. How We Use Your Information</h2>

          <p>We use the information we collect for the following purposes:</p>

          <ul>
            <li>To provide and maintain the App;</li>
            <li>
              To manage your account and authenticate your identity when you log
              in;
            </li>
            <li>
              To communicate with you regarding your account, including
              responding to your inquiries and providing customer support;
            </li>
            <li>
              To send you important notifications, such as updates to our terms
              or this Privacy Policy;
            </li>
            <li>
              To detect, prevent, and address technical issues or fraudulent
              activities;
            </li>
            <li>To comply with legal obligations.</li>
          </ul>
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
