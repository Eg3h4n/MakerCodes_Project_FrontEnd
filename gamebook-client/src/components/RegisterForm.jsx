import React, { Component } from "react";
import { Form, Button } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import RegisterFormInput from "./LoginFormInput";

class RegisterForm extends Component {
  onSubmit = formValues => {
    //console.log(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="username"
          title="Username"
          type="text"
          placeholder="Enter your username"
          component={RegisterFormInput}
          required="true"
        />
        <Field
          name="name"
          title="Name"
          type="text"
          placeholder="Enter your name"
          component={RegisterFormInput}
          require="false"
        />

        <Field
          name="surname"
          title="Surname"
          type="text"
          placeholder="Enter your surname"
          component={RegisterFormInput}
          required="false"
        />

        <Field
          name="email"
          title="Email"
          type="email"
          placeholder="Enter your email"
          component={RegisterFormInput}
          required="true"
        />
        <Field
          name="password"
          title="Password"
          type="password"
          placeholder="Enter your password"
          component={RegisterFormInput}
          required="true"
          minLength="6"
        />
        <Field
          name="confirmPassword"
          title="Confirm Password"
          type="password"
          placeholder="Enter your password again"
          component={RegisterFormInput}
          required="true"
          minLength="6"
        />
        <Button color="success">Register</Button>
      </Form>
    );
  }
}

export default reduxForm({
  form: "registerForm"
})(RegisterForm);
