import React from "react";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import EventInputField from "../../../common/commonReduxForm/EventInputField";
import { loginAction } from '../authActions'
const actions = {
    loginAction
}
const LoginForm = ({loginAction,handleSubmit,closeModal}) => {
  return (
    <Form error size="large" onSubmit={handleSubmit(loginAction)}>
      <Segment>
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
        <Button fluid size="large"  color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default connect(null,actions)(reduxForm({form:"loginForm"})(LoginForm));
