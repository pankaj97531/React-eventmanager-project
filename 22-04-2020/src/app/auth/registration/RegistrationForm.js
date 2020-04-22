import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import EventInputField from "../../../common/commonReduxForm/EventInputField";

const RegistrationForm = () => {
  return (
    <Form error size="large">
      <Segment>
      <Field
          name="displayName"
          component={EventInputField}
          type="text"
          placeholder="Known As"
        />
        <Field
          name="email"
          component={EventInputField}
          type="text"
          placeholder="Enter Email"
        />
        <Field
          name="password"
          component={EventInputField}
          type="password"
          placeholder="Enter Password"
        />
        <Button fluid size="large" color="teal">
          Registration
        </Button>
      </Segment>
    </Form>
  );
};

export default reduxForm({form : "registrationForm"})(RegistrationForm);
