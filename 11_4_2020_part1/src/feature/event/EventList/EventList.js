import React, { Component, Fragment } from 'react'
import EventListitem from './EventListitem'

class EventList extends Component {
    render() {
        const {events} = this.props;
        return (
            <Fragment>
                {
                    events.map(event=>(
                        <EventListitem key={event.id} event={event} />
                    ))
                }
                
               
            </Fragment>
        )
    }
}
export default EventList