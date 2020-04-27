import React from "react";
import { Grid } from "semantic-ui-react";
import SettingsNav from "./SettingsNav";
import { Route, Redirect, Switch } from "react-router-dom";
import { connect } from "react-redux";
import BasicPage from "./BasicPage";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";
import { updatePassword } from "../../../app/auth/authActions";

const actions = {
  updatePassword,
};

const mapstate=(state)=>{
  return{
    providerId :  state.firebase.auth.providerData[0].providerId 
  }
}

const SettingsDashBoard = ({ updatePassword,providerId }) => {
  return (
    <Grid>
      <Grid.Column width="12">
        <Switch>
          <Redirect exact from="/settings" to="/settings/basic" />
          <Route path="/settings/basic" component={BasicPage} />
          <Route path="/settings/about" component={AboutPage} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route
            path="/settings/account"
            render={() => <AccountPage providerId={providerId}  updatePassword={updatePassword} />}
          />
        </Switch>
      </Grid.Column>
      <Grid.Column width="4">
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};

export default connect(mapstate, actions)(SettingsDashBoard);
