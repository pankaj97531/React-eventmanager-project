import React, { Component } from "react";
import { Segment, Form, Button, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import cuid from "cuid";
import { combineValidators, isRequired, composeValidators, hasLengthGreaterThan } from "revalidate";
import { reduxForm,  Field } from "redux-form";
import { createEvent, updateEvent } from "../eventAction";
import EventInputField from "../../../common/commonReduxForm/EventInputField";
import EventTextArea from "../../../common/commonReduxForm/EventTextArea";
import EventSelectInput from "../../../common/commonReduxForm/EventSelectInput";
import EventDateInput from "../../../common/commonReduxForm/EventDateInput";


const mapStateToProps = (state, ownProp) => {
  //  console.log(ownProp);
  const eventId =
    ownProp &&
    ownProp.match &&
    ownProp.match.params &&
    ownProp.match.params["id"];
  let event = {};
  if (eventId) {
    event = state.events.filter((event) => event.id === eventId)[0];
  }
  return {
    initialValues : event,
  };
};

const actions = {
  createEvent,
  updateEvent,
};
const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" },
];

const validate = combineValidators({
  title : isRequired({message : "The event title is required"}),
  category : isRequired({message : "The event category is required"}),
  description : composeValidators(
    isRequired({message : "Event Description is required"}),
    hasLengthGreaterThan(4)({message : "Event description length should greater than 4."})
  )(),
   city : isRequired('city'),
   venue : isRequired('venue'),
   date : isRequired('date')
})

class EventForm extends Component {
  
  onFormSubmit = (value) => {
     //console.log(value);
     //console.log(this.props.initialValues);
    if (this.props.initialValues.id) {
      this.props.updateEvent(value);
      this.props.history.push(`/events/${this.props.initialValues.id}`);
    } else {
      const newEvent = {
        ...value,
        id: cuid(),
        description: "New Event Added",
        hostPhotoURL: "assets/images/user.png",
      };

      this.props.createEvent(newEvent);
       this.props.history.push(`/events/${newEvent.id}`);
    }
  };

  render() {
   // console.log(this.props.initialValues);
    const { history, initialValues, invalid, submitting, pristine } = this.props
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)} autoComplete="off">
              <Field
                name="title"
                component={EventInputField}
                type="text"
                placeholder="Enter Title"
              />
              <Field
                name="category"
                component={EventSelectInput}
                type="text"
                
                options={category}
                placeholder="Enter Event Category"
              />
              <Field
                name="description"
                component={EventTextArea}
                rows="3"
                type="text"
                placeholder="Enter Event Description"
              />
              <Field
                name="hostedBy"
                component={EventInputField}
                type="text"
                placeholder="Enter Event Hosted By"
              />
              <Field
                name="city"
                component={EventInputField}
                type="text"
                placeholder="Enter Event City"
              />
              <Field
                name="venue"
                component={EventInputField}
                type="text"
                placeholder="Enter Event Venue"
              />
              <input 
                name='date'
                type="date"
                dateformat="dd LLL yyyy h:mm a"
                showtimeselect="true"
                timeformat="HH:mm"
                component={EventDateInput}
                placeholder="Enter Event Date"
                
              />
              <Button disabled={ invalid || submitting || pristine } positive type="submit">
                Submit
              </Button>
              <Button
                type="button"
                onClick={initialValues.id ?  ()=>history.push(`/events/${initialValues.id}`) : ()=>history.push('/events') }
              >
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default connect(
  mapStateToProps,
  actions
)(reduxForm({ form: "eventForm",validate })(EventForm));
