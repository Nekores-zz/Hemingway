import React, { Component } from "react";
import { Layout, Row, Col } from "antd";

const { Content} = Layout;
export default class LayoutLogin extends Component {
  render() {
    return <Layout>
        <Content>
          {this.props.children}
        </Content>
      </Layout>;
  }
}
