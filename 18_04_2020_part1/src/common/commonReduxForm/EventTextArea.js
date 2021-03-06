import React from 'react';
import { Form, Label } from "semantic-ui-react";

const EventTextArea = ({
    input,
    rows,
    type,
    placeholder,
    meta: { touched, error },
  }) => {
    //console.log(input);
    return (
      <Form.Field error={touched && !!error}>
        <textarea {...input} placeholder={placeholder} type={type} rows={rows} />
        {touched && error && <Label>{error}</Label>}
      </Form.Field>
    );
  };

export default EventTextArea