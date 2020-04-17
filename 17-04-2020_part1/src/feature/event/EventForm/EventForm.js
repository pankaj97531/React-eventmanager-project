import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import cuid from 'cuid';
import { createEvent,updateEvent } from  '../eventAction';

const mapStateToProps=(state,ownProp)=>{
//  console.log(ownProp);
  const eventId = ownProp &&  ownProp.match && ownProp.match.params && ownProp.match.params['id'] ; 
  let event= {
    id : "",  
    title : "",
    date : "",
    city : "",
    venue : "",
    hostedBy : ""
  };
  if(eventId){
    event = state.events.filter((event)=>event.id===eventId)[0]; 
  }
  return{
    event
  }
}

const actions={
  createEvent,updateEvent 
};

class EventForm extends Component {
  state={...this.props.event}

  handleChangeInput=({target : {name,value}})=>{
    this.setState({
      [name] : value
    })
  }
  handleSubmit=()=>{
   // console.log(this.state);
   if(this.state.id){
    this.props.updateEvent(this.state);
    this.props.history.goBack();
   }else{
     const newEvent={
       ...this.state,
       id : cuid(),
       description:"New Event Added",
       hostPhotoURL:'assets/images/user.png'
     }
  
    
      this.props.createEvent(newEvent);
      this.setState({
      id : "",  
      title : "",
      date : "",
      city : "",
      venue : "",
      hostedBy : ""
      })
      this.props.history.push('/events');
     
   }

  }

  render() {
      let { title,date,city,venue,hostedBy } = this.state;
      //console.log(this.state);
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
          <Button type="button" onClick={this.props.history && this.props.history.goBack}>Cancel</Button>
        </Form>
      </Segment>
    );
  }
}
export default connect(mapStateToProps,actions)(EventForm);
