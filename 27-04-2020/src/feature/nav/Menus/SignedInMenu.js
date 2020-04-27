import React from 'react'
import { Menu, Image, Dropdown } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

const SignedInMenu = ({onLogout,auth}) => {
    return (
       <Menu.Item position="right">
           <Image avatar spaced="right" src="assets/images/logo.png" />
           <Dropdown pointing="top left" text={auth.email}>
               <Dropdown.Menu>
                   <Dropdown.Item text="Create Event" icon="plus" />
                   <Dropdown.Item text="My Event" icon="calendar" />
                   <Dropdown.Item text="My Network" icon="users" />
                   <Dropdown.Item text="My Profile" icon="user" />
                   <Dropdown.Item as={NavLink} to="/settings" text="Settings" icon="settings" />
                   <Dropdown.Item onClick={onLogout} text="Sign Out" icon="power" />
               </Dropdown.Menu>
           </Dropdown>
       </Menu.Item>
    )
}

export default SignedInMenu
