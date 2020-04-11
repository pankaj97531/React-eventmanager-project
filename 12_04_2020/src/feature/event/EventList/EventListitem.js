import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee';

class EventListitem extends Component {
    render() {
        const {event,handleOpen,OnselectedEvent,onDeleteEvent} = this.props;
        //console.log(event.hostPhotoURL);
        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size="tiny" circular src={event.hostPhotoURL} />
                            <Item.Content>
        <Item.Header>{event.title}</Item.Header>
                                <Item.Description>
                                    Hosted by {event.hostedBy}
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name="clock" /> {event.date} | 
                        <Icon name="marker" /> {event.venue}
                    </span>
                </Segment>
                <Segment secondary>
                    <List horizontal>
                        {
                         event.attendees && event.attendees.map(attendee=>(
                            <EventListAttendee key={attendee.id} attendee ={attendee} />
                          ))  
                        }
                        
                    </List>
                </Segment>
                <Segment clearing>
        <span>{event.description}</span>
        <Button as="a" color="red" onClick={()=>onDeleteEvent(event.id)} content="Delete" floated="right" />
                    <Button as="a" color="teal" onClick={()=>{
handleOpen();OnselectedEvent(event);
                    }}  floated="right" content="View" />
                </Segment>
            </Segment.Group>
        )
    }
}
export default  EventListitem;