/**
 *
 * NavbarUserModule
 *
 */

import React from "react";
import { Badge, Icon, Avatar as AvatarAnt, Dropdown } from "antd";
import {NavLink} from "react-router-dom"
import { NavbarUserModuleStyle, MenuStyle } from "./_style";
import Avatar1 from "../../../images/Profiles/yulia.png";
/* eslint-disable react/prefer-stateless-function */


const menu = (
  <MenuStyle className="_menu">
    <MenuStyle.Item>
      <NavLink
        to="/faqs"
        className="navigation-item"
        activeClassName="navigation-item--active"
      >
        <Icon type="question-circle" />
        <span>Faqs</span>
      </NavLink>
    </MenuStyle.Item>
    <MenuStyle.Item>
      <NavLink
        to="/login"
        className="navigation-item"
        activeClassName="navigation-item--active"
      >
        <Icon type="logout" />
        <span>Logout</span>
      </NavLink>
    </MenuStyle.Item>
  </MenuStyle>
);
class NavbarUserModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: menu,
      noBell: this.props.nobell,
      email: this.props.email,
    };
  }

  render() {
    const { menu, noBell, email } = this.state;
    const { notifications } = this.props;
    return <NavbarUserModuleStyle>
        {!noBell && <li>
            <Badge status="error" title="You have notifications" offset={[1, 12]} count={1} dot>
              <Icon type="bell" onClick={notifications} />
            </Badge>
          </li>}
        <li>
          <AvatarAnt className="_avatar" src={Avatar1} />
          <Dropdown overlay={menu} placement="bottomRight">
            <a className="ant-dropdown-link" href="#">
              {email} <Icon type="down" />
            </a>
          </Dropdown>
        </li>
      </NavbarUserModuleStyle>;
  }
}

NavbarUserModule.propTypes = {};

export default NavbarUserModule;
