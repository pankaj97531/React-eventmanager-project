import React, { Component, Fragment } from 'react'
import EventListitem from './EventListitem'

class EventList extends Component {
    render() {
        const {events,handleOpen,OnselectedEvent,onDeleteEvent} = this.props;
        return (
            <Fragment>
                {
                    events.map(event=>(
                        <EventListitem key={event.id} event={event} handleOpen={handleOpen} OnselectedEvent={OnselectedEvent} onDeleteEvent={onDeleteEvent} />
                    ))
                }
                
               
            </Fragment>
        )
    }
}
export default EventList