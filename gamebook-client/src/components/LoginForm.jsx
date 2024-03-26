import React, { Component } from "react";
import { Form, Button } from "reactstrap";
import { Field, reduxForm } from "redux-form";
import LoginFormInput from "./LoginFormInput";

import { app } from "../_config/firebase";
import { getDatabase, onValue } from "firebase/database";
import { getAuth, deleteUser, signInWithEmailAndPassword } from "firebase/auth";

class LoginForm extends Component {
  onSubmit = (formValues) => {
    //console.log(formValues);
    const auth = getAuth(app);

    signInWithEmailAndPassword(
      auth,
      formValues.email,
      formValues.password
    ).then(() => {
      deleteUser(auth.currentUser)
        .then(() => {
          // User deleted.
        })
        .catch((error) => {
          // An error ocurred
          // ...
        });
    });
  };

  render() {
    return (
      <div className="text-white">
        <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="email"
            title="Enter your email to delete your account"
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
          <Button color="danger">Delete Account</Button>
        </Form>
      </div>
    );
  }
}

export default reduxForm({
  form: "loginForm",
})(LoginForm);
