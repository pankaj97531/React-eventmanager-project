import React, { Component, Fragment } from "react";
import EventDashboard from "../../feature/event/EventDashboard/EventDashboard";
import NavBar from "../../feature/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch, withRouter } from "react-router-dom";
import HomePage from "../../feature/home/HomePage";
import EventDetailedPage from "../../feature/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../feature/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../feature/user/UserDeatiled/UserDetailedPage";
import SettingsDashBoard from "../../feature/user/Settings/SettingsDashBoard";
import EventForm from "../../feature/event/EventForm/EventForm";
import Testcomponent from "../Testcomponent/Testcomponent";
import ModalManager from "../modal/ModalManager";


class App extends Component {
  render() {
    return (
      <Fragment>
        <ModalManager />
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Switch key={this.props.location.key}>
                <Route exact path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route exact path="/people" component={PeopleDashboard} />
                <Route path="/test" component={Testcomponent} />
                <Route path="/people/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashBoard} />
                <Route path={["/createEvent",'/manage/:id']} component={EventForm} />
                </Switch>
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default withRouter(App);
