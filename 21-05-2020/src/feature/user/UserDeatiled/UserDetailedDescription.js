import React, { Fragment } from "react";
import {
  Grid,
  Segment,
  Header,
  List,
  Item,
  Icon,
} from "semantic-ui-react";

const UserDetailedDescription = ({ profile }) => {
  return (
    <Fragment>
      <Grid.Column width={12}>
        <Segment>
          <Grid columns={2}>
            <Grid.Column width={10}>
              <Header icon="smile" content="About Display Name" />
              <p>
                I am a:{" "}
                <strong>
                  {profile.displayName ? profile.displayName : "NA"}
                </strong>
              </p>
              <p>
                Originally from{" "}
                <strong>{profile.city ? profile.city : "NA"}</strong>
              </p>
              <p>
                Member Since: <strong>28th March 2018</strong>
              </p>
              <p>Description of user</p>
            </Grid.Column>
            <Grid.Column width={6}>
              <Header icon="heart outline" content="Interests" />
              {profile.interests && profile.interests.length > 0 && (
                <List>
                  {profile.interests.map((item, index) => {
                    return (
                      <Item key={item + index}>
                        <Icon name="heart" />
                        <Item.Content>{item}</Item.Content>
                      </Item>
                    );
                  })}
                </List>
              )}
            </Grid.Column>
          </Grid>
        </Segment>
      </Grid.Column>
    </Fragment>
  );
};

export default UserDetailedDescription;
