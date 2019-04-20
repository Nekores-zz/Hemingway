import React, { Component } from "react";
import { Layout, Drawer, Button, Row, Col,Icon, Affix , Menu} from "antd";
// import {LayoutDefaultStyle} from "./_style"
import NavbarUserModule from "../Elements/NavbarUserModule"
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const { Content, Header, Sider, Footer } = Layout;
const menu = (
  <Menu>
    
    <Menu.Item>
        <NavLink
            to='/content'
            className="navigation-item"
            activeClassName="navigation-item--active">
            {/* <i className="material-icons">people</i> */}
            <span>Content</span>
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
const HeaderTheme = styled(Header)`
  background-color: #1785fb;
  height: auto;
  ._barsIcon{
    color: white;
    font-size: 25px;
    position: relative;
    top: 3px;
    padding-top: 15px;
    padding-bottom: 24px;
    padding-right: 30px;
    border-right: 1px solid #ffffff40;
  }
`;
export default class LayoutDefault extends Component {
  state = { visible: false, placement: "left" };

  showDrawer = () => {
    this.setState({ visible: true });
  };

  onClose = () => {
    this.setState({ visible: false });
  };

  onChange = e => {
    this.setState({ placement: e.target.value });
  };

  
  render() {
    return <div>
        <Layout>
          <Drawer title="Basic Drawer" placement={this.state.placement} closable={true} onClose={this.onClose} visible={this.state.visible} mask={true} maskClosable={true}>
            <p>
              <NavLink
            to='/content'
            className="navigation-item"
            activeClassName="navigation-item--active">
            {/* <i className="material-icons">people</i> */}
            <span>Content</span>
          </NavLink>
          </p>
          <p>
          <NavLink
            to='/content/textnote'
            className="navigation-item"
            activeClassName="navigation-item--active">
            {/* <i className="material-icons">people</i> */}
            <span>Text Note</span>
          </NavLink>
          </p>
          <p>
          <NavLink
            to='/login'
            className="navigation-item"
            activeClassName="navigation-item--active">
            {/* <i className="material-icons">people</i> */}
            <span>Logout</span>
          </NavLink>
          </p>
          </Drawer>
          <HeaderTheme>
            <Row type="flex" justify="space-between" align="middle">
              <Col span={2}>
                <Icon type="menu-fold" onClick={this.showDrawer} className="_barsIcon"/>
              </Col>
              <Col span={22}>
                <NavbarUserModule menu={menu}/>
              </Col>
            </Row>
          </HeaderTheme>
          <Content style={{margin: "30px", height: "calc(100vh - 124px)"}}>{this.props.children}</Content>
        </Layout>
      </div>;
  }
}