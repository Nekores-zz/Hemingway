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
import Avatar4 from "../../images/Profiles/nekores.png";

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
      writeComment: false,
      data: [
        {
          id: 1,
          avatar: Avatar1,
          name: "Yulia",
          noteText:
            "Anastasia is a great vegan cafe to meet friends. They have a delicious and nutritious breakfast with loads of tasty dips, good salads, and incredible cakes. They treat every dish like it is a multi-layered experience, they take all the senses into account."
        },
        {
          id: 2,
          avatar: Avatar2,
          name: "Alex",
          noteText:
            "Anastasia is a great vegan cafe to meet friends. They have a delicious and nutritious breakfast with loads of tasty dips, good salads, and incredible cakes. They treat every dish like it is a multi-layered experience, they take all the senses into account."
        },
        {
          id: 3,
          avatar: Avatar3,
          name: "Mia",
          noteText:
            "Anastasia is a great vegan cafe to meet friends. They have a delicious and nutritious breakfast with loads of tasty dips, good salads, and incredible cakes. They treat every dish like it is a multi-layered experience, they take all the senses into account."
        },
        {
          id: 4,
          avatar: Avatar4,
          name: "Supervisor",
          noteText:
            "Anastasia is a great vegan cafe to meet friends. They have a delicious and nutritious breakfast with loads of tasty dips, good salads, and incredible cakes. They treat every dish like it is a multi-layered experience, they take all the senses into account."
        }
      ],
      modal: {
        avatar: "",
        author: "",
        value:""
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
    this.onChange = this.onChange.bind(this);
  }
  showModal = item => {
    let modal = { ...this.state.modal };
    modal.avatar = item.avatar;
    modal.author = item.name;
    this.setState({ modal, visible: true });
    console.log(this.state.modal);
  };
  writeComment = () => {
    this.setState({ writeComment: !this.state.writeComment });
  };

  handleOk = () => {
    this.setState({
      commentTo: "The modal will be closed after two seconds",
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({ visible: false, confirmLoading: false });
      notification["success"]({
        message: "Success",
        description: ["You have added your comment successfully!"]
      });
    }, 2000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };
  goOnSubmit() {
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
  onChange(e){
    let {modal} = this.state;
    modal.value = e.target.value;
    this.setState({modal})
  }
  render() {
    const { visible, confirmLoading, data, modal } = this.state;
    return (
      <div style={{ height: "100%" }}>
        <Helmet>
          <title>Supervisor</title>
          <meta name="description" content="Description of Supervisor Screen" />
        </Helmet>
        <LayoutDefault
          collapseAble={true}
          menu={this.state.menu}
          nobell
          sidebarToggle
        >
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
                {this.state.data.map((item, i) => {
                  if (item.name == "Yulia") {
                    return (
                      <Comment
                        key={i}
                        textNote
                        Avatar={item.avatar}
                        noteText={item.noteText}
                        background="white"
                        textnoteCounter="2/15"
                        authorName={item.name}
                        commentBtn={() => this.showModal(item)}
                      />
                    );
                  } else if (item.name == "Alex") {
                    return (
                      <Comment
                        key={i}
                        Avatar={item.avatar}
                        noteText={item.noteText}
                        authorName={item.name}
                        commentBtn={() => this.showModal(item)}
                      />
                    );
                  } else if (item.name == "Mia") {
                    return (
                      <Comment
                        key={i}
                        Avatar={item.avatar}
                        noteText={item.noteText}
                        authorName={item.name}
                        commentBtn={() => this.showModal(item)}
                      />
                    );
                  } else if (item.name == "Supervisor") {
                    return (
                      this.state.writeComment && (
                        <Comment
                          key={i}
                          className="animated zoomIn slow-2s delay-0s"
                          background="#e4f5ff"
                          Avatar={item.avatar}
                          noteText={item.noteText}
                          authorName={item.name}
                          commentBtn={() => this.showModal(item)}
                          rightLeft

                        />
                      )
                    );
                  }
                })}
              </Col>
            </Row>
            <Row>
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
                {this.state.writeComment == true && (
                  <Button
                    type="primary"
                    onClick={this.goOnSubmit}
                    className="_sbmtBtn animated zoomIn slow-2s delay-0s"
                  >
                    Submit
                  </Button>
                )}

                <IconButton
                  className="_editBtn animated zoomIn slow-2s delay-0s"
                  icon={this.state.writeComment == true ? "close" : "edit"}
                  onClick={this.writeComment}
                />
                <Modal
                  avatar={modal.avatar}
                  visible={visible}
                  okText="Save"
                  onOk={this.handleOk}
                  confirmLoading={confirmLoading}
                  onCancel={this.handleCancel}
                  commentTo={modal.author}
                  value={this.state.modal.value}
                  onMouseUp={this.props.onMouseUp}
                  onChange={this.onChange}
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
