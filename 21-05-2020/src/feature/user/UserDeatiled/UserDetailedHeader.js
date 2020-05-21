import React from "react";
import { Grid, Segment, Item, Header } from "semantic-ui-react";

const UserDetailedHeader = ({ profile }) => {
  console.log(profile);
  return (
    <Grid.Column width={16}>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              avatar
              size="small"
              src="https://randomuser.me/api/portraits/men/20.jpg"
            />
            <Item.Content verticalAlign="bottom">
              <Header as="h1">
                {profile.displayName ? profile.displayName : "NA"}
              </Header>
              <br />
              <Header as="h3">
                {profile.occupation ? profile.occupation : "NA"}
              </Header>
              <br />
              <Header as="h3">{profile.city ? profile.city : "NA"}</Header>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    </Grid.Column>
  );
};

export default UserDetailedHeader;
