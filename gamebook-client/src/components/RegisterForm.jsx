import React, { Component } from "react";
import { Form, Button } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import { required, email } from "redux-form-validators";
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
          validate={required()}
        />
        <Field
          name="name"
          title="Name"
          type="text"
          placeholder="Enter your name"
          component={RegisterFormInput}
        />

        <Field
          name="surname"
          title="Surname"
          type="text"
          placeholder="Enter your surname"
          component={RegisterFormInput}
        />

        <Field
          name="email"
          title="Email"
          type="email"
          placeholder="Enter your email"
          component={RegisterFormInput}
          validate={[required(), email()]}
        />
        <Field
          name="password"
          title="Password"
          type="password"
          placeholder="Enter your password"
          component={RegisterFormInput}
          validate={required()}
          minLength="6"
        />
        <Field
          name="confirmPassword"
          title="Confirm Password"
          type="password"
          placeholder="Enter your password again"
          component={RegisterFormInput}
          validate={required()}
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
