import React, { Component } from 'react'
import { Menu, Container, Button } from 'semantic-ui-react';
import {  NavLink, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';

class NavBar extends Component {
    state={
        login : true
    }
    onLogin=()=>this.setState({login : true})
    onLogout=()=>{
        this.setState({login:false})
        this.props.history.push('/');
        //console.log(this.props);
    }
    render() {
        const {login} = this.state;
        return (
            <Menu inverted fixed="top">
                <Container>
                    <Menu.Item exact as={NavLink} to="/" header>
                        <img src="assets/images/logo.png" alt="logo" />
                    </Menu.Item>
                    <Menu.Item exact as={NavLink} to="/events" name="Events" />
                    <Menu.Item as={NavLink} to="/people" name="People" />
                    <Menu.Item as={NavLink} to="/test" name="Test" />
                    <Menu.Item>
                        <Button as={NavLink} to="/createEvent" floated="right" positive inverted content="Create Event" />
                    </Menu.Item>
                    {login ? <SignedInMenu onLogout={this.onLogout} /> : <SignedOutMenu onLogin={this.onLogin} />}
                </Container>
            </Menu>
        )
    }
}
export default withRouter(NavBar);