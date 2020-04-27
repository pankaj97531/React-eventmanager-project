import React, { Component, Fragment } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase';
import SignedOutMenu from "../Menus/SignedOutMenu";
import SignedInMenu from "../Menus/SignedInMenu";
import { openModal } from '../../../app/modal/modalAction';
const actions={
    openModal
}

const mapState=(state)=>{
    return{
        auth : state.firebase.auth
    }
}

class NavBar extends Component {

  onLogin = () => this.setState({ login: true });
  onLogout = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
    //console.log(this.props);
  };
  render() {
    const { openModal,auth } = this.props;
    //console.log(auth);
    const authenticated = auth.isLoaded && !auth.isEmpty; 
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item exact as={NavLink} to="/" header>
            <img src="assets/images/logo.png" alt="logo" />
          </Menu.Item>
          <Menu.Item exact as={NavLink} to="/events" name="Events" />
          { authenticated &&
          <Fragment> 
          <Menu.Item as={NavLink} to="/people" name="People" />
          <Menu.Item as={NavLink} to="/test" name="Test" />
          <Menu.Item>
            <Button
              as={NavLink}
              to="/createEvent"
              floated="right"
              positive
              inverted
              content="Create Event"
            />
          </Menu.Item>
          </Fragment>
          }
          {authenticated ? (
            <SignedInMenu auth={auth}  onLogout={this.onLogout}  />
          ) : (
            <SignedOutMenu  openModal={openModal} />
          )}
        </Container>
      </Menu>
    );
  }
}
export default withRouter(withFirebase(connect(mapState,actions)(NavBar)));