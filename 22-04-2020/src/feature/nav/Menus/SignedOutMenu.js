import React from "react";
import { Menu, Button } from "semantic-ui-react";

const SignedOutMenu = ({  openModal }) => {
  return (
    <Menu.Item position="right">
      <Button
        onClick={() => openModal("LoginModal")}
        basic
        inverted
        content="Login"
      />
      <Button
        basic
        inverted
        content="Registration"
        onClick={() => openModal("RegistrationModal")}
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
