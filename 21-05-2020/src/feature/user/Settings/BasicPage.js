import React, { Component } from "react";
import {
  Segment,
  Form,
  Header,
  Divider,
  Button,
  Label,
} from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import EventInputField from "../../../common/commonReduxForm/EventInputField";
import CustomRadioInput from "../../../common/commonReduxForm/CustomRadioInput";

class BasicPage extends Component {
  render() {
    const {
      error,
      handleSubmit,
      pristine,
      submitting,
      updateProfile,
    } = this.props;
    return (
      <Segment>
        <Header dividing size="large" content="Basic" />
        <Form onSubmit={handleSubmit(updateProfile)}>
          <Field
            width={8}
            name="displayName"
            type="text"
            component={EventInputField}
            placeholder="Known As"
          />
          <Form.Group inline>
            <Label>Gender :</Label>{" "}
            <Field
              name="gender"
              value="male"
              type="radio"
              label="Male"
              component={CustomRadioInput}
            />
            <Field
              name="gender"
              value="female"
              type="radio"
              label="Female"
              component={CustomRadioInput}
            />
          </Form.Group>
          <Field
            width={8}
            name="dateOfBirth"
            type="date"
            component={EventInputField}
            placeholder="Date Of Birth"
          />
          <Field
            width={8}
            name="city"
            type="text"
            component={EventInputField}
            placeholder="Home Towm"
          />
          {error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
          <Divider />
          <Button
            disabled={pristine || submitting}
            size="large"
            positive
            content="Update Profile"
          />
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({
  form: "basicForm",
  enableReinitialize: true,
  destroyOnUnmount: false,
})(BasicPage);
