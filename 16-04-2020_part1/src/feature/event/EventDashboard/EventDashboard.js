import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';
import { createEvent , deleteEvent, updateEvent } from  '../eventAction';

class EventDashboard extends Component {
    state={
        isOpen : false,
        selectedEvent : null
    }
    handleOpen=()=>{
        this.setState(({isOpen})=>({
            isOpen : true,
            selectedEvent : null
        }))
    }
    handleClose=()=>{
      this.setState({ isOpen : false})
    }
    addEvent=(newEvent)=>{
      //console.log(newEvent);
      if(newEvent.id){
        // this.setState((prevState)=>{
        //   return {events : prevState.events.map((event)=>{
        //     if(event.id===newEvent.id){
        //       return newEvent
        //     }else{
        //       return event
        //     }
        //   }),
        //   selectedEvent:null,isOpen:false
        // }
        // })
        this.props.updateEvent(newEvent);
      }else{
      //  console.log("else");
        newEvent.id= cuid();
        newEvent.description="New Event Added";
        newEvent.hostPhotoURL='assets/images/user.png';
        // this.setState({
        //   events : [...this.state.events,newEvent],
        //   isOpen : false
        // })
        this.props.createEvent(newEvent);
      }
    }
    OnselectedEvent=(event)=>{
      this.setState({
        selectedEvent : event
      })
    }
    onDeleteEvent=(id)=>{
     // console.log(id);
      // this.setState((prevState)=>{
      //   return{ events : prevState.events.filter((event)=>{
      //     return event.id!==id
      //   }) }
      // })
      this.props.deleteEvent(id)
    }
    render() {
        let { isOpen,selectedEvent } = this.state;
        let { events } = this.props;
        //console.log(this.props.events);
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events} OnselectedEvent={this.OnselectedEvent} handleOpen={this.handleOpen} onDeleteEvent={this.onDeleteEvent} />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button positive onClick={()=>this.handleOpen()} content="Create Event" />
                    {isOpen && <EventForm key={selectedEvent ? selectedEvent.id : 0} selectedEvent={selectedEvent} cancelOpen={this.handleClose} createEvent={this.addEvent} /> }

                </Grid.Column>
            </Grid>
                
        )
    }
}
const mapStateToProp=(state)=>{
  return{
    events : state.events
  }
}
const actions={
  createEvent,
  updateEvent,
  deleteEvent
}
export default connect(mapStateToProp,actions)(EventDashboard);