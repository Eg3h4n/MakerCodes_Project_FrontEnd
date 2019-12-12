import React, { Component } from "react";
import { Form } from "reactstrap";
import { Field, reduxForm } from "redux-form";
//import { email } from "redux-form-validators";
import RegisterFormInput from "./LoginFormInput";

class AccountUpdateForm extends Component {
  onSubmit = formValues => {
    //console.log(formValues);
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          name="avatarURL"
          title="Avatar URL"
          type="text"
          placeholder="Put the url of your new avatar here"
          component={RegisterFormInput}
        />
        <Field
          name="username"
          title="Username"
          type="text"
          placeholder={this.props.user.username}
          component={RegisterFormInput}
        />
        <Field
          name="name"
          title="Name"
          type="text"
          placeholder={this.props.user.name}
          component={RegisterFormInput}
        />

        <Field
          name="surname"
          title="Surname"
          type="text"
          placeholder={this.props.user.surname}
          component={RegisterFormInput}
        />

        <Field
          name="email"
          title="Email"
          type="email"
          placeholder={this.props.user.email}
          component={RegisterFormInput}
        />
        <Field
          name="password"
          title="Password"
          type="password"
          placeholder="Enter your password"
          component={RegisterFormInput}
          minLength="6"
        />
        <Field
          name="confirmPassword"
          title="Confirm Password"
          type="password"
          placeholder="Enter your password again"
          component={RegisterFormInput}
          minLength="6"
        />
      </Form>
    );
  }
}

export default reduxForm({
  form: "updateForm"
})(AccountUpdateForm);
