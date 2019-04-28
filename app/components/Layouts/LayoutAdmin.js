import React, { Component } from "react";
import { Layout, Drawer, Button, Row, Col,Icon, Affix , Menu} from "antd";
import { LayoutDefaultStyle, HeaderTheme, DrawerStyle } from "./_style";
import NavbarUserModule from "../Elements/NavbarUserModule"
import { NavLink } from "react-router-dom";

const { Content, Header, Sider, Footer } = Layout;
const menu = (
  <Menu>
    
    <Menu.Item>
        <NavLink
            to='/content'
            className="navigation-item"
            activeClassName="navigation-item--active">
            {/* <i className="material-icons">people</i> */}
            <span>Dashboard</span>
          </NavLink>
    </Menu.Item>
    <Menu.Item>
        <NavLink
            to='/login'
            className="navigation-item"
            activeClassName="navigation-item--active">
            <span>Logout</span>
          </NavLink>
    </Menu.Item>
  </Menu>
);

export default class LayoutAdmin extends Component {

  constructor(props) {
    super(props);

    this.state = { visible: this.props.collapseAble?true:false,
       placement: "left" };
    this.showDrawer = this.showDrawer.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  

  showDrawer = () => {
    this.setState({ visible: true });
  }

  onClose = () => {
    this.setState({ visible: false });
  }

  onChange = e => {
    this.setState({ placement: e.target.value });
  }

  
  render() {
    return <div>
        <LayoutDefaultStyle>
          <DrawerStyle title="Main Menu " placement={this.state.placement} closable={true} onClose={this.onClose} visible={this.state.visible} mask={true} maskClosable={true}>
            <h4 className="_headings"> GENERAL</h4>
            <ul>
              <li>
                <NavLink to="/content" className="navigation-item" activeClassName="navigation-item--active">
                  {/* <i className="material-icons">people</i> */}
                  <span>Dashboard</span>
                </NavLink>
              </li>
            </ul>

            <h4 className="_headings"> Boxes</h4>
            <ul>
              <li>
                <NavLink to="error" className="navigation-item" activeClassName="navigation-item--active">
                  <span>search</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="error" className="navigation-item" activeClassName="navigation-item--active">
                  <span>sources</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="error" className="navigation-item" activeClassName="navigation-item--active">
                  <span>transfer</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="error" className="navigation-item" activeClassName="navigation-item--active">
                  <span>compare</span>
                </NavLink>
              </li>
            </ul>

            <h4 className="_headings"> Places</h4>
            <ul>
              <li>
                <NavLink to="error" className="navigation-item" activeClassName="navigation-item--active">
                  <span>Search</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="error" className="navigation-item" activeClassName="navigation-item--active">
                  <span>chains</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="error" className="navigation-item" activeClassName="navigation-item--active">
                  <span>map</span>
                </NavLink>
              </li>
            </ul>

            <h4 className="_headings"> tags</h4>
            <ul>
              <li>
                <NavLink to="error" className="navigation-item" activeClassName="navigation-item--active">
                  <span>tree</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="error" className="navigation-item" activeClassName="navigation-item--active">
                  <span>connected </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="error" className="navigation-item" activeClassName="navigation-item--active">
                  <span>Influence map</span>
                </NavLink>
              </li>
            </ul>
          </DrawerStyle>
          <HeaderTheme>
            <Row type="flex" justify="space-between" align="middle">
              <Col span={2}>
                <Icon type="menu-fold" onClick={this.showDrawer} className="_barsIcon" />
              </Col>
              <Col span={22}>
                <NavbarUserModule menu={menu} />
              </Col>
            </Row>
          </HeaderTheme>
          <Content
            style={{ margin: "30px" }}
          >
            {this.props.children}
          </Content>
        </LayoutDefaultStyle>
      </div>;
  }
}