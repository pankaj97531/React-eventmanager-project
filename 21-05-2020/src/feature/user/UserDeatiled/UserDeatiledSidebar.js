import React from 'react'
import { Grid, Segment, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const UserDeatiledSidebar = () => {
    return (
        <Grid.Column width={4}>
        <Segment>
          <Button color="teal" as={NavLink} to="/settings" fluid basic content="Edit Profile" />
        </Segment>
      </Grid.Column>
    )
}

export default UserDeatiledSidebar
