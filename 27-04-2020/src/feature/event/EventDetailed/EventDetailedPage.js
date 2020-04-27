import React from 'react'
import { Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import EventDetailedHeader from './EventDetailedHeader'
import EventDetailedInfo from './EventDetailedInfo'
import EventDetailedChat from './EventDetailedChat'
import EventDetailedSidebar from './EventDetailedSidebar'

const mapStateToProp=(state,ownProp)=>{
 const eventId = ownProp.match.params['id'];
 const event = state.events.filter((event)=>event.id===eventId)[0];
 //console.log(event);
  return{
    event
  }
}
const EventDetailedPage = ({ event }) => {
//   const { pathname } = useLocation();
// //  console.log(pathname);
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);
    return (
        <Grid>
            <Grid.Column width={10}>
                <EventDetailedHeader event={event} />
                <EventDetailedInfo event={event} />
                <EventDetailedChat />
            </Grid.Column>
            <Grid.Column width={6}>
                <EventDetailedSidebar attendees={event.attendees ? event.attendees : [] } />
            </Grid.Column>
        </Grid>
    )
}

export default connect(mapStateToProp)(EventDetailedPage)
