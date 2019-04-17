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

import Button from "../../components/Elements/Button";
import Input from "../../components/Elements/Input";

import { LoginPageWrapper, LoginFormStyle, ErrorAlert } from "./_style";
/* eslint-disable react/prefer-stateless-function */
export class ContentScreen extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>ContentScreen</title>
          <meta name="description" content="Description of ContentScreen" />
        </Helmet>
      </div>
    );
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
