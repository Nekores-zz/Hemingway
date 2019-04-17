/**
 *
 * ContentScreen
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
import makeSelectContentScreen from "./selectors";
import reducer from "./reducer";
import saga from "./saga";



import { Layout, Row, Col, Form } from "antd";
import {LayoutStyle} from "./_style"
import LayoutDefault from "../../components/Layouts/LayoutDefault";
import Button from "../../components/Elements/Button";
import Jumborton from "../../components/Jumborton"

import imgProfile from "../../images/Profiles/1.jpg";

// import { LoginPageWrapper, LoginFormStyle, ErrorAlert } from "./_style";
/* eslint-disable react/prefer-stateless-function */
export class ContentScreen extends React.Component {
  render() {
    return <div>
        <Helmet>
          <title>ContentScreen</title>
          <meta name="description" content="Description of ContentScreen" />
        </Helmet>
        <LayoutDefault>
          <LayoutStyle>
            <Row type="flex" justify="center" align="middle" style={{height:"100%"}}>
              <Col span={6}>
                <Jumborton stylePic={{height:"80px", width: "80px", "border-radius":"28px",border: "solid 1px rgba(0, 0, 0, 0.05)", background:`url(${imgProfile})`, "background-size":"cover","background-repeat":"no-repeat"}} alt="Profile Image" mainTitle="Hey Yulia! Let's add some texts today!" primaryButtonName="Let's Go" secondaryButtonName="Texts remaining 15/15" />
              </Col>
            </Row>
          </LayoutStyle>
        </LayoutDefault>
      </div>;
  }
}

ContentScreen.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  contentScreen: makeSelectContentScreen()
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

const withReducer = injectReducer({ key: "contentScreen", reducer });
const withSaga = injectSaga({ key: "contentScreen", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ContentScreen);
