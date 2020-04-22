import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import EventList from '../EventList/EventList';

import cuid from 'cuid';
import { deleteEvent } from  '../eventAction';
import LoadingComponent from '../loading/LoadingComponent';
import RecentActivity from '../../recentActivity/RecentActivity';

class EventDashboard extends Component {
    addEvent=(newEvent)=>{
      if(newEvent.id){
        //this.props.updateEvent(newEvent);
      }else{
        newEvent.id= cuid();
        newEvent.description="New Event Added";
        newEvent.hostPhotoURL='assets/images/user.png';
       // this.props.createEvent(newEvent);
      }
    }

    onDeleteEvent=(id)=>{
      this.props.deleteEvent(id)
    }
    
    render() {

        let { events,async } = this.props;
       // console.log(async)
        if(async.loading)
        return <LoadingComponent />
        //console.log(this.props.events);
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList events={events}  onDeleteEvent={this.onDeleteEvent} />
                </Grid.Column>
                <Grid.Column width={6}>
                <RecentActivity />

                </Grid.Column>
            </Grid>
                
        )
    }
}
const mapStateToProp=(state)=>{
  return{
    events : state.events,
    async : state.async
  }
}
const actions={
  
  deleteEvent
}
export default connect(mapStateToProp,actions)(EventDashboard);