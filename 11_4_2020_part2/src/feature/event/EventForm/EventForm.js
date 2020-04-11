import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  state={
    title : "",
    date : "",
    city : "",
    venue : "",
    hostedBy : ""
  }
  handleChangeInput=({target : {name,value}})=>{
    this.setState({
      [name] : value
    })
  }
  handleSubmit=()=>{
    console.log(this.state);
    this.props.createEvent(this.state);
    this.setState({
    title : "",
    date : "",
    city : "",
    venue : "",
    hostedBy : ""
    })
  }
  render() {
      let { cancelOpen } = this.props;
      let { title,date,city,venue,hostedBy } = this.state;
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Event Title</label>
            <input onChange={this.handleChangeInput} value={title} name="title" placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input type="date" onChange={this.handleChangeInput} value={date} name="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input placeholder="City" onChange={this.handleChangeInput} value={city} name="city" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input placeholder="Enter the Venue of the event" value={venue} onChange={this.handleChangeInput} name="venue" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input placeholder="Enter the name of person hosting" value={hostedBy} onChange={this.handleChangeInput} name="hostedBy" />
          </Form.Field>
          <Button positive onClick={this.handleSubmit} type="submit">
            Submit
          </Button>
          <Button onClick={()=>cancelOpen('close')} type="button">Cancel</Button>
        </Form>
      </Segment>
    );
  }
}
export default EventForm;
