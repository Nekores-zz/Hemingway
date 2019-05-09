/**
 *
 * TextNote
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
import makeSelectTextNote from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import {
  Row,
  Col,
  Icon,
  notification,
  Popover,
  List,
  Mention,
  Menu
} from "antd";
import { NavLink } from "react-router-dom";
import LayoutDefault from "../../../components/Layouts/layoutDefault";
import Input from "./../../../components/Elements/Input/";
import {
  Button,
  ButtonText,
  IconButton
} from "./../../../components/Elements/Button/";
import Comments from "./../Comments/";
import { TextNoteStyle } from "./_style";

const { toContentState } = Mention;

/* eslint-disable react/prefer-stateless-function */

notification.config({
  placement: "topRight",
  top: 85,
  duration: 3
});

function onSelect(suggestion) {
  console.log("onSelect", toContentState(suggestion));
}

const users = ["afc163", "benjycui", "yiminghe", "jljsj33", "dqaria", "RaoHai"];
const tags = ["1.0", "2.0", "3.0"];
export class TextNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [
        "Racing car sprays burning fuel into crowd.",
        "Japanese princess to wed commoner.",
        "Australian walks 100km after outback crash.",
        "Man charged over missing wedding girl.",
        "Los Angeles battles huge wildfires."
      ],
      text: "",
      menu: (
        <Menu>
          <Menu.Item>
            <NavLink
              to="/content"
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
      ),
      suggestions: [],
      visible: false,
      selectedText: [],
      inputValue1: "",
      inputValue2: toContentState(""),
      randomText: {
        title: "https://www.opentable.com/r/sushi-ginza-onodera-new-york? …",
        para:
          "Anastasia is a great vegan cafe to meet friends. They have a delicious and nutritious breakfast with loads of tasty dips, good salads, and incredible cakes. They treat every dish like it is a multi-layered experience, they take all the senses into account."
      }
    };
    this.randomTextGenerate = this.randomTextGenerate.bind(this);
    this.onFromSend = this.onFromSend.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  randomTextGenerate() {
    const { title, para } = this.state.randomText;
    this.setState({
      inputValue1: title,
      inputValue2: toContentState(para)
    });
    notification["success"]({
      message: "Random Text Generated",
      description: "Random text is successfully added."
    });
  }
  onFromSend() {
    if (this.state.inputValue1 != "" && this.state.inputValue2 != "") {
      this.props.history.push("/content/textnote/success");
      // notification["success"]({
      //   message: "Submitted Successfully",
      //   description: "Your text has been sent to further approval process"
      // });
    } else {
      notification["error"]({
        message: "Oops!",
        description: [
          "You cant submit empty values, You must have to generate text to submit."
        ]
      });
    }
  }
  componentDidMount() {
    // this.mention.focus();
  }

  handleChange = editorState => {
    this.setState({
      inputValue2: editorState
    });
  };
  getSelectedText = e => {
    alert(1);
    if (windown.getSelection().toString().length) {
      let text = window.getSelection().toString();
      // console.log(text)
      this.setState({
        text,
        visible: true
      });
    }
  };
  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  onSearchChange = (value, trigger) => {
    console.log("onSearchChange", value, trigger);
    const dataSource = trigger === "@" ? users : tags;
    this.setState({
      suggestions: dataSource.filter(item => item.indexOf(value) !== -1)
    });
  };
  render() {
    const { menu } = this.state;
    return <div style={{ height: "100%" }}>
        <Helmet>
          <title>TextNote</title>
          <meta name="description" content="Description of TextNote" />
        </Helmet>
        <LayoutDefault menu={menu} comments={<Comments />}>
          <TextNoteStyle>
            <Row type="flex" justify="center" align="middle" style={{ height: "100%" }}>
              <Col xs={{ span: 24 }} sm={{ span: 18 }} md={{ span: 14 }} lg={{ span: 8 }} xl={{ span: 9 }} xxl={{ span: 7 }}>
                <Input value={this.state.inputValue1} placeholder="Source link" className="animated zoomIn slow-2s delay-0s" onChange={e => this.setState(
                      {
                        inputValue1: e.target.value
                      }
                    )} />
                {/* <Input.TextArea
                  value={this.state.inputValue2}
                  autosize={{ minRows: 6, maxRows: 6 }}
                  style={{ resize: "none" }}
                  placeholder="Add some text and tags … "
                  className="animated zoomIn slow-2s delay-0s"
                  onMouseUp={this.getSelectedText}
                  onChange={e => {
                    this.setState({
                      inputValue2: e.target.value
                    });
                  }}
                /> */}
                <Popover placement="bottom" content={<List header={<div>
                          Header
                        </div>} footer={<div>
                          Footer
                        </div>} bordered dataSource={this.state.listItems} renderItem={item => <List.Item
                        >
                          {this.state.listItems}
                        </List.Item>} />} title={this.state.text} trigger="click" visible={this.state.visible} onVisibleChange={this.handleVisibleChange} />
                <Mention className="animated zoomIn slow-2s delay-0s" ref={ele => (this.mention = ele)} multiLines={true} loading={true} style={{ width: "100%", height: 150 }} onChange={this.handleChange} placeholder="input @ to mention people, # to mention tag" prefix={["@", "#"]} onSearchChange={this.onSearchChange} suggestions={this.state.suggestions} onSelect={onSelect} value={this.state.inputValue2} />
                <Button type="primary" className="animated zoomIn slow-2s delay-0s" onClick={this.onFromSend}>
                  Submit
                </Button>
                <ButtonText type="primary" icon="thunderbolt" isright="right" className="animated zoomIn slow-2s delay-0s" onClick={this.randomTextGenerate}>
                  Get random text
                </ButtonText>
              </Col>
              <Col>
                <Row className="animated zoomIn slow-2s delay-0s" type="flex" justify="start" align="top">
                  <Col>
                    <IconButton icon="tag" onClick={() => alert("no tags found")} style={{ marginLeft: "20px", marginTop: "20px" }} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </TextNoteStyle>
        </LayoutDefault>
      </div>;
  }
}

TextNote.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  textNote: makeSelectTextNote()
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

const withReducer = injectReducer({ key: "textNote", reducer });
const withSaga = injectSaga({ key: "textNote", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(TextNote);
