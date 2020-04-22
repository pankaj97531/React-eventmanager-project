import React,{Fragment} from 'react'
import { Header, Segment } from 'semantic-ui-react'

const RecentActivity = () => {
    return (
        <Fragment>
            <Header attached="top" content="Recent Activity" />
            <Segment>
                <p>Recent Activity</p>
            </Segment>
        </Fragment>
    )
}

export default RecentActivity
