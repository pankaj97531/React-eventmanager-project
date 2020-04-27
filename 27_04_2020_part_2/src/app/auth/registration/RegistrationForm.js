import React from "react";
import { Form, Segment, Button,Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { combineValidators,isRequired } from 'revalidate';
import EventInputField from "../../../common/commonReduxForm/EventInputField";
import { registerUser } from "../authActions";

const validate = combineValidators({
  displayName : isRequired('Username'),
  email : isRequired('Email'),
  password : isRequired('Password')
}) 

const actions = {
  registerUser
};
const RegistrationForm = ({ registerUser, handleSubmit,invalid,submitting,error }) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(registerUser)} autoComplete="off">
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
        {error && <Label basic color="red">{error}</Label>}
        <Button  disabled={invalid || submitting} fluid size="large" color="teal">
          Registration
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(
  null,
  actions
)(reduxForm({ form: "registrationForm" ,validate})(RegistrationForm));
