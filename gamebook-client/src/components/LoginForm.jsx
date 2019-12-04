import React, { Component } from "react";
import { Form, Button } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import LoginFormInput from "./LoginFormInput";

class LoginForm extends Component {
  onSubmit = formValues => {
    //console.log(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="email"
          title="Email"
          type="email"
          placeholder="Enter email here"
          component={LoginFormInput}
        />
        <Field
          name="password"
          title="Password"
          type="password"
          placeholder="Enter password here"
          minLength="6"
          component={LoginFormInput}
        />
        <Button color="success">Login</Button>
      </Form>
    );
  }
}

export default reduxForm({
  form: "loginForm"
})(LoginForm);
