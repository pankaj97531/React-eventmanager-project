import React from "react";
import { Form, Label } from "semantic-ui-react";

const CustomRadioInput = ({ width, input, type, label }) => {
  return (
    <Form.Field>
      <div className="ui radio">
        <input {...input} type={type} /> <Label>{label}</Label>
      </div>
    </Form.Field>
  );
};

export default CustomRadioInput;
