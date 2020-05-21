import React, { Fragment } from 'react';
import { Segment, List, Item, Label } from 'semantic-ui-react';
//import { NavLink } from 'react-router-dom';

const EventDetailedSidebar = ({attendees}) => {
  const isHost=false;
    return (
        <Fragment>
        <Segment
        textAlign="center"
        style={{ border: 'none' }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees && attendees.length} {attendees && attendees.length === 1 ? "Person" : "People" } Going
      </Segment>
      <Segment attached>
        <List relaxed divided>
        {attendees && attendees.map((item)=>(
          <Item key={item.id}  style={{ position: 'relative' }}>
          {isHost && 
          <Label style={{ position: 'absolute' }} color="orange" ribbon="right">
          Host
        </Label>
          }
          
       
        <Item.Image size="tiny" src={item.photoURL} />
        <Item.Content verticalAlign="middle">
          <Item.Header as="h3">
        <span>{item.name}</span>
          </Item.Header>
        </Item.Content>
      </Item>
        ))}
          

        </List>
      </Segment>
      </Fragment>
    )
}

export default EventDetailedSidebar
