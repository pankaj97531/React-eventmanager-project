import React from "react";
import {
  Segment,
  Header,
  Form,
  Label,
  Divider,
  Button,
  Icon,
} from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import {
  combineValidators,
  composeValidators,
  isRequired,
  matchesField,
} from "revalidate";
import EventInputField from "../../../common/commonReduxForm/EventInputField";

const validate=combineValidators({
  newPassword1 : isRequired({message : "Password is required"}),
  newPassword2 : composeValidators(
     isRequired({message : "confirm Password is required"}),
     matchesField('newPassword1')({message : "Password should match"})
  )()
})

const AccountPage = ({ error,invalid,submitting,updatePassword,handleSubmit,providerId }) => {
  return (
    <Segment>
      <Header dividing size="large" content="Account" />
      { providerId ==='password' &&
      <div>
        <Header color="teal" sub content="Change Password" />
        <p>Use this page to update your account setting.</p>
        
        <Form onSubmit={handleSubmit(updatePassword)}>
          <Field
            width={8}
            name="newPassword1"
            type="password"
            pointing="left"
            inline={true}
            basic={true}
            component={EventInputField}
          />
          <Field
            width={8}
            name="newPassword2"
            type="password"
            pointing="left"
            inline={true}
            basic={true}
            component={EventInputField}
          />
          {error && (
            <Label basic color="red">
              {error}
            </Label>
          )}
          <Divider />
          <Button disabled={invalid || submitting} size="large" positive content="Update Password" />
          </Form> 
          </div> }
          { providerId =='gmail' && <div>
        <Header color="teal" sub content="Facebook Content" />
        <p>Please visit facebook to update your account setting</p>
        <Button type="button" color="facebook">
          <Icon name="facebook">Go To Facebook</Icon>
        </Button>
          </div> }
          { providerId =='facebook' && <div>
        <Header color="teal" sub content="Google Account" />
        <p>Please visit Google to update your account setting.</p>
        <Button type="button" color="google plus">
          <Icon name="google plus">Go To Google</Icon>
        </Button>
          </div> }
    </Segment>
  );
};

export default reduxForm({ form: "account",validate })(AccountPage);
