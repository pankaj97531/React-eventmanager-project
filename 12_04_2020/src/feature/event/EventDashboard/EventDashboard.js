import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';
import cuid from 'cuid';

const eventsDashboard = [
    {
      id: '1',
      title: 'Trip to Tower of London',
      date: '2018-03-27',
      category: 'culture',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: "Tower of London, St Katharine's & Wapping, London",
      hostedBy: 'Bob',
      hostPhotoURL: 'https://randomuser.me/api/portraits/women/17.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/women/32.jpg'
        },
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/women/22.jpg'
        }
      ]
    },
    {
      id: '2',
      title: 'Trip to Punch and Judy Pub',
      date: '2018-03-28',
      category: 'drinks',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'London, UK',
      venue: 'Punch & Judy, Henrietta Street, London, UK',
      hostedBy: 'Tom',
      hostPhotoURL: 'https://randomuser.me/api/portraits/women/22.jpg',
      attendees: [
        {
          id: 'b',
          name: 'Tom',
          photoURL: 'https://randomuser.me/api/portraits/women/22.jpg'
        },
        {
          id: 'a',
          name: 'Bob',
          photoURL: 'https://randomuser.me/api/portraits/women/20.jpg'
        }
      ]
    }
  ]

class EventDashboard extends Component {
    state={
        events : eventsDashboard,
        isOpen : false,
        selectedEvent : null
    }
    handleOpen=()=>{
        this.setState(({isOpen})=>({
            isOpen : true
        }))
    }
    handleClose=()=>{
      this.setState({ isOpen : false})
    }
    addEvent=(newEvent)=>{
      //console.log(newEvent);
      if(newEvent.id){
        this.setState((prevState)=>{
          return {events : prevState.events.map((event)=>{
            if(event.id===newEvent.id){
              return newEvent
            }else{
              return event
            }
          }),
          selectedEvent:null,isOpen:false
        }
        })
      }else{
      //  console.log("else");
        newEvent.id= cuid();
        newEvent.description="New Event Added";
        newEvent.hostPhotoURL='assets/images/user.png';
        this.setState({
          events : [...this.state.events,newEvent],
          isOpen : false
        })
      }
    }
    OnselectedEvent=(event)=>{
      this.setState({
        selectedEvent : event
      })
    }
    onDeleteEvent=(id)=>{
      console.log(id);
      this.setState((prevState)=>{
        return{ events : prevState.events.filter((event)=>{
          return event.id!==id
        }) }
      })
    }
    render() {
        let { events,isOpen,selectedEvent } = this.state;
       // console.log(events);
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

export default EventDashboard;