/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";

import {LoginScreen} from "../LoginScreen";

import {Form} from "antd";

const AppWrapper = styled.div`
  min-height:100%;
  min-width:100%;

`;

const LoginForm = Form.create({ name: "normal_login" })(LoginScreen);
export default function App() {
  return <AppWrapper>
      <Helmet titleTemplate="%s - Hemingway" defaultTitle="Hemingway">
        <meta name="description" content="Hemingway | Web Application" />
      </Helmet>
      
      
      <LoginForm form={{ Username: "admin", Password: "admin" }} />
    </AppWrapper>;
}
