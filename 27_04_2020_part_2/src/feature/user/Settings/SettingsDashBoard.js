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
import { updateProfile } from "../UserDeatiled/userAction";

const actions = {
  updatePassword,
  updateProfile,
};

const mapstate = (state) => {
  return {
    providerId: state.firebase.auth.providerData[0].providerId,
    user: state.firebase.profile,
  };
};

const SettingsDashBoard = ({
  updatePassword,
  providerId,
  user,
  updateProfile,
}) => {
  return (
    <Grid>
      <Grid.Column width="12">
        <Switch>
          <Redirect exact from="/settings" to="/settings/basic" />
          <Route
            path="/settings/basic"
            render={() => (
              <BasicPage initialValues={user} updateProfile={updateProfile} />
            )}
          />
          <Route
            path="/settings/about"
            render={() => (
              <AboutPage initialValues={user} updateProfile={updateProfile} />
            )}
          />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route
            path="/settings/account"
            render={() => (
              <AccountPage
                providerId={providerId}
                updatePassword={updatePassword}
              />
            )}
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
