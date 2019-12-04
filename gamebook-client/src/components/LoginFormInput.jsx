import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

export default function LoginFormInput(props) {
  return (
    <FormGroup>
      <Label for={props.name}>{props.title}</Label>
      <Input
        {...props.input}
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        minLength={props.minLength}
        required
      />
    </FormGroup>
  );
}
