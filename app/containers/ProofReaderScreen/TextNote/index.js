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
import { Row, Col, Icon, notification, Popover, List, Mention } from "antd";
import LayoutDefault from "../../../components/Layouts/layoutDefault";
import Input from "./../../../components/Elements/Input/";
import { Button, ButtonText } from "./../../../components/Elements/Button/";
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

      suggestions: [],
      visible: false,
      selectedText: [],
      inputValue2: toContentState("Hey! Anastasia is a great vegan cafe to meet friends. They have a delicious and nutritious breakfast with loads of dips, good salads, and incredible cheesecakes. They treat every dish like it is a multi-layered experience, they take all the senses into account."),
    };
    this.onFromSend = this.onFromSend.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onFromSend() {
    if (this.state.inputValue2 != "") {
      this.props.history.push("/proofreader/textnote/success");
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
    return (
      <div>
        <Helmet>
          <title>TextNote</title>
          <meta name="description" content="Description of TextNote" />
        </Helmet>
        <LayoutDefault>
          <TextNoteStyle>
            <Row
              type="flex"
              justify="center"
              align="middle"
              style={{ height: "100%" }}
            >
             <Col
             className="animated zoomIn slow-2s delay-0s"
                xs={{ span: 24 }}
                sm={{ span: 9 }}
                md={{ span: 10}}
                lg={{ span: 8 }}
                xl={{ span: 9 }}
                xxl={{ span: 7 }}
              >
              <div>
                  <p className="_textnote">
                    Hey! Anastasia is a great vegan cafe to meet friends. They have a delicious and nutritious breakfast with loads of dips, good salads, and incredible cheesecakes. They treat every dish like it is a multi-layered experience, they take all the senses into account.
                    </p>
                </div>
              </Col>
              <Col
              xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 10 }}
                xl={{ span: 11 }}
                xxl={{ span: 9 }}>
              <Row>
                <Col
                xs={{ span: 24 }}
                sm={{ span: 20 }}
                md={{ span: 20}}
                lg={{ span: 20 }}
                xl={{ span: 20 }}
                xxl={{ span: 20 }}
              >
                <Popover
                  placement="bottom"
                  content={
                    <List
                      header={<div>Header</div>}
                      footer={<div>Footer</div>}
                      bordered
                      dataSource={this.state.listItems}
                      renderItem={item => (
                        <List.Item>{this.state.listItems}</List.Item>
                      )}
                    />
                  }
                  title={this.state.text}
                  trigger="click"
                  visible={this.state.visible}
                  onVisibleChange={this.handleVisibleChange}
                >
                  {/* <Button type="primary">Click me</Button> */}
                </Popover>
                <Mention
                  className="animated zoomIn slow-2s delay-0s"
                  ref={ele => (this.mention = ele)}
                  multiLines={true}
                  loading={true}
                  style={{ width: "100%"}}
                  onChange={this.handleChange}
                  placeholder="input @ to mention people, # to mention tag"
                  prefix={["@", "#"]}
                  onSearchChange={this.onSearchChange}
                  suggestions={this.state.suggestions}
                  onSelect={onSelect}
                  value={this.state.inputValue2}
                />
              </Col>
                <Col
                xs={{ span: 24 }}
                sm={{ span: 4 }}
                md={{ span: 4 }}
                lg={{ span: 4 }}
                xl={{ span: 4 }}
                xxl={{ span: 4 }}
              >
              <Button
                  type="primary"
                  className="animated zoomIn slow-2s delay-0s"
                  onClick={this.onFromSend}
                  style={{"margin-left": "20px"}}
                >
                Submit
                </Button>
                
              </Col>
                </Row>
              </Col>
            </Row>
          </TextNoteStyle>
        </LayoutDefault>
      </div>
    );
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