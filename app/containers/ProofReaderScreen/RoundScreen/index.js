/**
 *
 * RoundScreen
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
import makeSelectRoundScreen from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

import { Layout, Row, Col, Form } from "antd";
import { LayoutStyle } from "./_style";
import LayoutDefault from "../../../components/Layouts/LayoutDefault";
import Button from "../../../components/Elements/Button";
import Jumborton from "../../../components/Jumborton";

import imgProfile from "../../../images/Profiles/mia.png";

/* eslint-disable react/prefer-stateless-function */
export class RoundScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>Round Screen</title>
          <meta name="description" content="Description of ContentScreen" />
        </Helmet>
        <LayoutDefault>
          <LayoutStyle>
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ height: "100%" }}
              className="animated zoomIn slow-2s delay-0s"
            >
              <Col
                xs={{ span: 24 }}
                sm={{ span: 18 }}
                md={{ span: 14 }}
                lg={{ span: 8 }}
                xl={{ span: 9 }}
                xxl={{ span: 7 }}
              >
                <Jumborton
                  stylePic={{
                    height: "80px",
                    width: "80px",
                    borderRadius: "28px",
                    border: "solid 1px rgba(0, 0, 0, 0.05)",
                    background: `url(${imgProfile})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  }}
                  alt="Profile Image"
                  mainTitle="Hey Mia! Next round starts at 9am, you better come!"
                  secondaryButtonName="Texts remaining 0/15"
                />
              </Col>
            </Row>
          </LayoutStyle>
        </LayoutDefault>
      </div>
    );
  }
}

RoundScreen.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  roundScreen: makeSelectRoundScreen()
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

const withReducer = injectReducer({ key: "roundScreen", reducer });
const withSaga = injectSaga({ key: "roundScreen", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(RoundScreen);
