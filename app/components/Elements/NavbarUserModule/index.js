/**
 *
 * NavbarUserModule
 *
 */

import React from "react";
import { Badge, Icon, Avatar, Dropdown } from "antd";
import { NavbarUserModuleStyle } from "./_style";

/* eslint-disable react/prefer-stateless-function */
class NavbarUserModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: this.props.menu,
      noBell: this.props.nobell
    };
  }

  render() {
    const { menu, noBell } = this.state;
    const { notifications } = this.props;
    return (
      <NavbarUserModuleStyle>
        {!noBell && (
          <li>
            <Badge
              status="error"
              title="You have notifications"
              offset={[1, 12]}
              count={1}
              dot
            >
              <Icon type="bell" onClick={notifications} />
            </Badge>
          </li>
        )}
        <li>
          <Avatar icon="user" className="_avatar" />
          <Dropdown overlay={menu} placement="bottomRight">
            <a className="ant-dropdown-link" href="#">
              yulia@mail.ru <Icon type="down" />
            </a>
          </Dropdown>
        </li>
      </NavbarUserModuleStyle>
    );
  }
}

NavbarUserModule.propTypes = {};

export default NavbarUserModule;
