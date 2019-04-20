/**
 *
 * LoginScreen
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
// import makeSelectLogin from "./selectors";
import reducer from "./reducer";
import styled from "styled-components";
import saga from "./saga";

import LoginFormLogo from "./../../images/Icons/ava-default.png";

import LayoutLogin from "../../components/Layouts/LayoutLogin";
// form
import { Layout, Row, Col, Form } from "antd";

import {Button} from "../../components/Elements/Button";
import Input from "../../components/Elements/Input";

// Router
import { NavLink } from "react-router-dom";

import { LoginPageWrapper, LoginFormStyle, ErrorAlert } from "./_style";

/* eslint-disable react/prefer-stateless-function */
export class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      databaseDetails : {
        Password : "admin",
        Username : "admin",
        
      },
      validation: true,
      validatePassword: null,
      validateUsername: null,
      loading: false,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.state.validatePassword == "" ||
      this.state.validateUsername == ""
    ) {
      this.setState({
        validation: false
      });
    } else if (
      this.state.validatePassword != this.state.databaseDetails.Password ||
      this.state.validateUsername != this.state.databaseDetails.Username
    ) {
      this.setState({ validation: false });
    } 
    else {
      this.setState({ validation: true });
      this.props.history.push("./content");
    }
    
   
  };
  render() {
    return <LoginPageWrapper>
        <LayoutLogin>
          <Row type="flex" justify="center" align="middle" >
            <Col xs={{ span: 20 }} sm={{ span: 18 }} md={{ span: 14 }} lg={{ span: 12 }} xl={{span: 8}} xxl={{span:6}} className={this.state.validation ? 'animated zoomIn slow-2s delay-0s': "animated headShake slow-0s delay-0s"}>
              <LoginFormStyle>
                <img className="_LoginFormLogo" src={LoginFormLogo} alt="" />
                <h2 className="_Title_H2"> Welcome to Project!</h2>
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <Form.Item className="usernameInput">
                    <Input placeholder="Username" onChange={e => this.setState(
                          {
                            validateUsername: e.target.value
                          }
                        )} />
                  </Form.Item>
                  <Form.Item className="passwordInput">
                    <Input type="password" placeholder="Password" onChange={e => this.setState(
                          { validatePassword: e.target.value }
                        )} />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button" block>
                      Sign in
                    </Button>
                  </Form.Item>
                </Form>

                {this.state.validation != true ? <ErrorAlert>
                    <p className="_error">Error</p>
                    <p className="_text">
                      Please enter a valid email and password
                    </p>
                  </ErrorAlert> : console.log("error")}
              </LoginFormStyle>
            </Col>
          </Row>
        </LayoutLogin>
      </LoginPageWrapper>;
  }
}

LoginScreen.propTypes = {
  // dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  // loginScreen: makeSelectLoginScreen()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "loginScreen", reducer });
const withSaga = injectSaga({ key: "loginScreen", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(LoginScreen);
