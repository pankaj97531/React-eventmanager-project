import React from "react";
import { Menu, Button } from "semantic-ui-react";

const SignedOutMenu = ({onLogin}) => {
  return (
    <Menu.Item position="right">
      <Button onClick={onLogin} basic inverted content="Login" />
      <Button
        basic
        inverted
        content="Sign Out"
        style={{ marginLeft: "0.5em" }}
      />
    </Menu.Item>
  );
};

export default SignedOutMenu;
