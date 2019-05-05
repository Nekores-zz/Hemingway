import React, { Component } from "react";
import { Layout, Drawer, Button, Row, Col, Icon, Affix, Menu } from "antd";
import {
  LayoutDefaultStyle,
  HeaderTheme,
  SiderStyle,
  CommentSiderStyle
} from "./_style";
import NavbarUserModule from "../Elements/NavbarUserModule";
import { NavLink } from "react-router-dom";

import CrossImg from "../../images/Icons/cross@3x.png";
import LogoPic from "../../images/Icons/pino@3x.png";

const { Content } = Layout;

export default class LayoutDefault extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: this.props.collapseAble ? true : false,
      showCommentbox: false,
      menu: this.props.menu,
      
    };
    this.showSider = this.showSider.bind(this);
  }

  showSider = () => {
    this.setState({ visible: !this.state.visible });
  };

  closeCommentbox = () => {
    this.setState({
      showCommentbox: !this.state.showCommentbox
    });
  };
  isNotifications = () => {
    if (this.state.showCommentbox == false) {
      this.setState({ showCommentbox: true });
    }
  };
  render() {
    const { menu } = this.state;
    return <div>
        <LayoutDefaultStyle>
          <SiderStyle isshowsider={this.state.visible.toString()}>
            <h4 className="_headings"> GENERAL</h4>
            <ul>
              <li>
                <NavLink to="/content" className="navigation-item" activeClassName="navigation-item--active">
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
          </SiderStyle>
          <Layout>
            <HeaderTheme>
              <Row type="flex" justify="space-between" align="middle">
                <Col span={2}>
                  {this.props.sidebarToggle ? <Icon type="menu-fold" onClick={this.showSider} className="_barsIcon" /> : <div className="_brand">
                      <img src={LogoPic} alt="logo" />
                    </div>}
                </Col>
                <Col span={22}>
                  <NavbarUserModule menu={menu} notifications={this.isNotifications} nobell={this.props.nobell} />
                </Col>
              </Row>
            </HeaderTheme>
            <Layout>
              <Content style={{ margin: "30px", height: "calc(100vh - 124px)" }}>
                {this.props.children}
              </Content>
              <CommentSiderStyle iscommentbox={this.state.showCommentbox.toString()}>
                <h3 className="_title">
                  Comments
                  <img onClick={this.closeCommentbox} src={CrossImg} height="30px" className="_crossBtn" />
                </h3>
                {this.props.comments}
              </CommentSiderStyle>
            </Layout>
          </Layout>
        </LayoutDefaultStyle>
      </div>;
  }
}
