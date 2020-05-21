import React from "react";
import {
  Segment,
  Header,
  Form,
  Label,
  Divider,
  Button,
} from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import CustomRadioInput from "../../../common/commonReduxForm/CustomRadioInput";
import EventTextArea from "../../../common/commonReduxForm/EventTextArea";
import EventSelectInput from "../../../common/commonReduxForm/EventSelectInput";
import EventInputField from "../../../common/commonReduxForm/EventInputField";

const interests = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" },
];
const AboutPage = ({ updateProfile, handleSubmit, submitting, pristine }) => {
  return (
    <Segment>
      <Header dividing size="large" content="About Me" />
      <p>Complete your prtofile to get most out of this site.</p>
      <Form onSubmit={handleSubmit(updateProfile)}>
        <Form.Group inline>
          <Label>Tell us about your status :</Label>
          <Field
            name="status"
            component={CustomRadioInput}
            type="radio"
            value="single"
            label="Single"
          />
          <Field
            name="status"
            component={CustomRadioInput}
            type="radio"
            value="relationship"
            label="Relationship"
          />
          <Field
            name="status"
            component={CustomRadioInput}
            type="radio"
            value="married"
            label="Married"
          />
        </Form.Group>
        <Divider />
        <Label>Tell us about yourself.</Label>
        <Field name="about" component={EventTextArea} placeholder="About Me" />
        <Field
          name="interests"
          component={EventSelectInput}
          options={interests}
          value="interests"
          multiple={true}
          placeholder="Select your Interests"
        />
        <Field
          width={8}
          name="occupation"
          type="text"
          component={EventInputField}
          placeholder="Occupation"
        />
        <Field
          width={8}
          name="origin"
          component={EventInputField}
          placeholder="Country Of Origin"
        />
        <Divider />
        <Button
          disabled={pristine || submitting}
          positive
          size="large"
          content="Update Profile"
        />
      </Form>
    </Segment>
  );
};

export default reduxForm({ form: "aboutForm", enableReinitialize: true,destroyOnUnmount:false })(
  AboutPage
);
