import React, { Component } from "react";
import { Layout, Drawer, Button, Row, Col, Affix } from "antd";
// import {LayoutDefaultStyle} from "./_style"
import styled from "styled-components";

const { Content, Header, Sider, Footer } = Layout;

const HeaderTheme = styled(Header)`
  background-color: #1785fb;
  height: auto;
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
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </Drawer>
          <HeaderTheme>
            <Button type="primary" onClick={this.showDrawer}>
              Open
            </Button>
            <h1> jsdkfdjsk</h1>
            <h1> jsdkfdjsk</h1>
            <h1> jsdkfdjsk</h1>
            <h1> jsdkfdjsk</h1>
          </HeaderTheme>
          <Content>{this.props.children}</Content>
        </Layout>
      </div>;
  }
}
