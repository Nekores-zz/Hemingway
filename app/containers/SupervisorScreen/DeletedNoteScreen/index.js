/**
 *
 * DeletedNoteScreen
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
import makeSelectDeletedNoteScreen from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

import { Layout, Row, Col, Form, notification,Menu } from "antd";
import {NavLink} from "react-router-dom";
import { LayoutStyle } from "./_style";
import LayoutDefault from "../../../components/Layouts/LayoutDefault";
import Button from "../../../components/Elements/Button";
import Jumborton from "../../../components/Jumborton/";

import monkeyImg from "../../../images/Icons/monkey.png";

/* eslint-disable react/prefer-stateless-function */
export class DeletedNoteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        menu: (
        <Menu>
          <Menu.Item>
            <NavLink
              to="/supervisor"
              className="navigation-item"
              activeClassName="navigation-item--active"
            >
              <span>Dashboard</span>
            </NavLink>
          </Menu.Item>
          <Menu.Item>
            <NavLink
              to="/login"
              className="navigation-item"
              activeClassName="navigation-item--active"
            >
              <span>Logout</span>
            </NavLink>
          </Menu.Item>
        </Menu>
      )
    };
    this.GolinkPrimaryBtn = this.GolinkPrimaryBtn.bind(this);
    this.GolinkSecondaryBtn = this.GolinkSecondaryBtn.bind(this);
  }
  GolinkPrimaryBtn() {
    this.props.history.push("/supervisor");
  }
  GolinkSecondaryBtn() {
    this.props.history.push("/supervisor");
  }
  render() {
    const {menu} = this.state;
    return (
      <div>
        <Helmet>
          <title>Delete Note</title>
          <meta name="description" content="Description of Delete Note" />
        </Helmet>
        <LayoutDefault menu={menu} nobell sidebarToggle>
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
                    border: "none",
                    background: `url(${monkeyImg})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    marginBottom: "-30px"
                  }}
                  alt="Profile Image"
                  mainTitle="Text has been deleted successfully."
                  primaryButtonName="Next"
                  // para="Text has been deleted successfully."
                  primarybuttonClick={this.GolinkPrimaryBtn}
                  secondarybuttonClick={this.GolinkSecondaryBtn}
                  secondaryButtonName="Undo"
                />
              </Col>
            </Row>
          </LayoutStyle>
        </LayoutDefault>
      </div>
    );
  }
}

DeletedNoteScreen.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  deletedNoteScreen: makeSelectDeletedNoteScreen()
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

const withReducer = injectReducer({ key: "deletedNoteScreen", reducer });
const withSaga = injectSaga({ key: "deletedNoteScreen", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(DeletedNoteScreen);
