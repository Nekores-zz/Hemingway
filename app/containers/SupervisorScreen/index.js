/**
 *
 * SupervisorScreen
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
import makeSelectSupervisorScreen from "./selectors";
import reducer from "./reducer";
import saga from "./saga";

import { Layout, Row, Col, Form, Icon, Menu, notification } from "antd";
import { NavLink } from "react-router-dom";
import { Button, IconButton } from "../../components/Elements/Button/";
import { LayoutStyle } from "./_style";
import LayoutDefault from "../../components/Layouts/LayoutDefault";
import Modal from "../../components/Modal/";

import Comment from "../../components/Comment/";
import Avatar1 from "../../images/Profiles/yulia.png";
import Avatar2 from "../../images/Profiles/alex.png";
import Avatar3 from "../../images/Profiles/mia.png";

/* eslint-disable react/prefer-stateless-function */

notification.config({
  placement: "topRight",
  top: 85,
  duration: 3
});

export class SupervisorScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      confirmLoading: false,
      data: {
       user1: {
          id: 1,
          avatar: Avatar1,
          name: "Yulia",
          noteText: "Anastasia is a great vegan cafe to meet friends. They have a delicious and nutritious breakfast with loads of tasty dips, good salads, and incredible cakes. They treat every dish like it is a multi-layered experience, they take all the senses into account.",
        },
       user2: {
          id: 2,
          avatar: Avatar2,
          name: "Alex",
          noteText: "Anastasia is a great vegan cafe to meet friends. They have a delicious and nutritious breakfast with loads of tasty dips, good salads, and incredible cakes. They treat every dish like it is a multi-layered experience, they take all the senses into account.",
        },
       user3: {
          id: 3,
          avatar: Avatar3,
          name: "Mia",
          noteText: "Anastasia is a great vegan cafe to meet friends. They have a delicious and nutritious breakfast with loads of tasty dips, good salads, and incredible cakes. They treat every dish like it is a multi-layered experience, they take all the senses into account.",
        },
       user4: {
          id: 4,
          avatar: Avatar3,
          name: "Supervisor",
          noteText: "Anastasia is a great vegan cafe to meet friends. They have a delicious and nutritious breakfast with loads of tasty dips, good salads, and incredible cakes. They treat every dish like it is a multi-layered experience, they take all the senses into account.",
        }

        },
      
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

    this.goOnSubmit = this.goOnSubmit.bind(this);
    this.goOnDelete = this.goOnDelete.bind(this);
    // this.showModal = this.showModal.bind(this);
    // this.handleOk = this.handleOk.bind(this);
    // this.handleCancel = this.handleCancel.bind(this);
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
      notification["success"]({
        message: "Success",
        description: ["You have added your comment successfully!"]
      });
    }, 2000);
  };

  handleCancel = () => {
    console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };
  goOnSubmit() {
    //  this.props.history.push("/supervisor/");
    // alert("Submitted")
    notification["success"]({
      message: "Submited Successfully!",
      description: ["Text note has been approved futher."]
    });
  }
  goOnDelete = () => {
    this.props.history.push("/supervisor/delete");
  };
  commented = () => {
    alert(1);
  };

  render() {
    const { visible, confirmLoading, ModalText, data } = this.state;
    return (
      <div>
        <Helmet>
          <title>Supervisor</title>
          <meta name="description" content="Description of SupervisorScreen" />
        </Helmet>
        <LayoutDefault collapseAble={true} menu={this.state.menu} nobell sidebarToggle>
          <LayoutStyle>
            <Row className="animated zoomIn slow-2s delay-0s">
              <Col
                xs={{ span: 24 }}
                sm={{ span: 23 }}
                md={{ span: 23 }}
                lg={{ span: 23 }}
                xl={{ span: 23 }}
                xxl={{ span: 23 }}
              >
                <Comment
                  Avatar={data.user1.avatar}
                  noteText={data.user1.noteText}
                  background="white"
                  textnoteCounter="2/15"
                  authorName={data.user1.name}
                  commentBtn={this.commented}
                />
               {/* // {Object.keys(data).map((keyName, i) => ( 
                    // <li className="travelcompany-input" key={i}>
                        <span className="input-label">key: {i} {keyName}</span>
                    // </li>
                    ))}
                    */}
                  <Comment
                  Avatar={data.user2.avatar}
                  noteText={data.user2.noteText}
                  authorName={data.user2.name}
                  commentBtn={this.commented}
                  />
                
                
                <Comment
                  Avatar={data.user3.avatar}
                  noteText={data.user3.noteText}
                  authorName={data.user3.name}
                  commentBtn={this.commented}
                />
              </Col>
            </Row>
            <Row className="animated zoomIn slow-2s delay-0s">
              <Col
                xs={{ span: 2 }}
                sm={{ span: 2 }}
                md={{ span: 2 }}
                lg={{ span: 2 }}
                xl={{ span: 2 }}
                xxl={{ span: 2 }}
              />
              <Col
                xs={{ span: 18 }}
                sm={{ span: 18 }}
                md={{ span: 18 }}
                lg={{ span: 19 }}
                xl={{ span: 19 }}
                xxl={{ span: 19 }}
              >
                <Button
                  type="primary"
                  onClick={this.goOnSubmit}
                  className="_btnMain"
                >
                  Submit
                </Button>

                <IconButton icon="edit" onClick={this.showModal} />
                <Modal
                  avatar={Avatar1}
                  visible={visible}
                  onOk={this.handleOk}
                  confirmLoading={confirmLoading}
                  onCancel={this.handleCancel}
                  modalText="Write your comment to Alex"
                />
                <IconButton
                  icon="delete"
                  onClick={this.goOnDelete}
                  style={{ float: "right" }}
                  bg="#ffe9c1"
                />
              </Col>
              <Col
                xs={{ span: 4 }}
                sm={{ span: 4 }}
                md={{ span: 4 }}
                lg={{ span: 4 }}
                xl={{ span: 4 }}
                xxl={{ span: 2 }}
              />
            </Row>
          </LayoutStyle>
        </LayoutDefault>
      </div>
    );
  }
}

SupervisorScreen.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  supervisorScreen: makeSelectSupervisorScreen()
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

const withReducer = injectReducer({ key: "supervisorScreen", reducer });
const withSaga = injectSaga({ key: "supervisorScreen", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SupervisorScreen);
