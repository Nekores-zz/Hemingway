/**
 *
 * Faqs
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
import makeSelectFaqs from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

import { Layout, Row, Col, Form, Menu } from "antd";
import { NavLink } from "react-router-dom";
import { LayoutStyle } from "./_style";
import LayoutDefault from "../../components/Layouts/LayoutDefault";
import Button from "../../components/Elements/Button";
import Jumborton from "../../components/Jumborton";

import imgProfile from "../../images/Profiles/yulia.png";

/* eslint-disable react/prefer-stateless-function */
export class Faqs extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.Golink = this.Golink.bind(this);
  }
  Golink() {
    this.props.history.push("/content/textnote");
  }
  render() {
    const { menu } = this.state;
    return <div style={{ height: "100%" }}>
        <Helmet>
          <title>Faqs</title>
          <meta name="description" content="Description of Faqs" />
        </Helmet>
        <LayoutDefault menu={menu}>
          <LayoutStyle>
            <Row className="animated zoomIn slow-2s delay-0s" type="flex" justify="center" align="middle" style={{ height: "100%" }}>
              <Col xs={{ span: 24 }} sm={{ span: 18 }} md={{ span: 14 }} lg={{ span: 15 }} xl={{ span: 15 }} xxl={{ span: 15 }}>
                <h2 className="_title">FAQ</h2>
                <p className="_para">
                  Anastasia is a great vegan cafe to meet friends. They have
                  a delicious and nutritious breakfast with loads of tasty
                  dips, good salads, and incredible cakes. They treat every
                  dish like it is a multi-layered experience, they take all
                  the senses into account.
                </p>
                <h3 className="__title">1. Scope of Airbnb Services</h3>
                <p className="__para">
                  1.1 The Airbnb Platform is an online marketplace that enables registered users (“Members”) and certain third parties who offer services (Members and third parties who offer services are “Hosts” and the services they offer are “Host Services”) to publish such Host Services on the Airbnb Platform (“Listings”) and to communicate and transact directly with Members that are seeking to book such Host Services (Members using Host Services are “Guests”). Host Services may include the offering of vacation or other properties for use ("Accommodations"), single or multi-day activities in various categories (“Experiences”), access to unique events and locations (“Events”), and a variety of other travel and non-travel related services.
                  <br />
                  <br />
                  1.2 As the provider of the Airbnb Platform, Airbnb does not own, create, sell, resell, provide, control, manage, offer, deliver, or supply any Listings or Host Services, nor is Airbnb an organiser or retailer of travel packages under Directive (EU) 2015/2302. Hosts alone are responsible for their Listings and Host Services. When Members make or accept a booking, they are entering into a contract directly with each other. Airbnb is not and does not become a party to or other participant in any contractual relationship between Members, nor is Airbnb a real estate broker or insurer. Airbnb is not acting as an agent in any capacity for any Member, except as specified in the Payments Terms.
                </p>
              </Col>
            </Row>
          </LayoutStyle>
        </LayoutDefault>
      </div>;
  }
}

Faqs.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  faqs: makeSelectFaqs()
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

const withReducer = injectReducer({ key: "faqs", reducer });
const withSaga = injectSaga({ key: "faqs", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Faqs);
