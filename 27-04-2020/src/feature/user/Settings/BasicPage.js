import React, { Component } from "react";
import { Segment, Form, Header, Divider, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import EventInputField from "../../../common/commonReduxForm/EventInputField";

class BasicPage extends Component {
  render() {
    return (
      <Segment>
        <Header dividing size="large" content="Basic" />
        <Form>
          <Field
            width={8}
            name="displayName"
            type="text"
            component={EventInputField}
            placeholder="Known As"
          />
          <Form.Group inline></Form.Group>
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
          <Divider />
          <Button size="large" positive content="Update Profile" />
        </Form>
      </Segment>
    );
  }
}

export default reduxForm({ form: "basicForm" })(BasicPage);
