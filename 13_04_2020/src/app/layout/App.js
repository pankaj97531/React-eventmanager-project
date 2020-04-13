import React, { Component, Fragment } from "react";
import EventDashboard from "../../feature/event/EventDashboard/EventDashboard";
import NavBar from "../../feature/nav/NavBar/NavBar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import HomePage from "../../feature/home/HomePage";
import EventDetailedPage from "../../feature/event/EventDetailed/EventDetailedPage";
import PeopleDashboard from "../../feature/user/PeopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../feature/user/UserDeatiled/UserDetailedPage";
import SettingsDashBoard from "../../feature/user/Settings/SettingsDashBoard";
import EventForm from "../../feature/event/EventForm/EventForm";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={HomePage} />
        <Route
          path="/(.+)"
          render={() => (
            <Fragment>
              <NavBar />
              <Container className="main">
                <Route path="/events" component={EventDashboard} />
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/people/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashBoard} />
                <Route path="/createEvent" component={EventForm} />
              </Container>
            </Fragment>
          )}
        />
      </Fragment>
    );
  }
}

export default App;
