import React from "react";
import { Form, Label } from "semantic-ui-react";

const EventInputField = ({
  input,
  type,
  placeholder,
  meta: { touched, error },
}) => {
  
  return (
    <Form.Field error={touched && !!error}>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <Label>{error}</Label>}
    </Form.Field>
  );
};

export default EventInputField;