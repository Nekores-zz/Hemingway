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
import {Row,Col,Icon, notification} from "antd";
import LayoutDefault from "../../../components/Layouts/layoutDefault";
import Input from "./../../../components/Elements/Input/";
import {Button, ButtonText} from "./../../../components/Elements/Button/"
import {TextNoteStyle} from "./_style";

/* eslint-disable react/prefer-stateless-function */

notification.config({
  placement: 'topRight',
  top: 85,
  duration: 3,
});
export class TextNote extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue1: "",
      inputValue2: "",
      randomText : {
          title:"https://www.opentable.com/r/sushi-ginza-onodera-new-york? …",
          para:"Anastasia is a great vegan cafe to meet friends. They have a delicious and nutritious breakfast with loads of tasty dips, good salads, and incredible cakes. They treat every dish like it is a multi-layered experience, they take all the senses into account."
      }
    }
    this.randomTextGenerate = this.randomTextGenerate.bind(this);
    this.onFromSend = this.onFromSend.bind(this);
  }
  randomTextGenerate(){
    const {title, para} = this.state.randomText;
    this.setState({
      inputValue1: title,
      inputValue2: para,
    });
     notification["success"]({
    message: 'Random Text Generated',
    description: 'Random text is successfully added.',
  });
     
    // alert(2);
  }
  onFromSend(){
  
  if(this.state.inputValue1 != "" && this.state.inputValue2 != ""){
    this.props.history.push("textnote/success");
    // notification["success"]({
    //   message: "Submitted Successfully",
    //   description: "Your text has been sent to further approval process"
    // });
  }else{
      notification["error"]({
      message: "Oops!",
      description: 'You cant submit empty values, You must have to generate text to submit.',
  });
  }
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>TextNote</title>
          <meta name="description" content="Description of TextNote" />
        </Helmet>
       <LayoutDefault>
         <TextNoteStyle>
          <Row type="flex" justify="center" align="middle" style={{ height: "100%" }} >
              <Col xs={{ span: 24 }} sm={{ span: 18 }} md={{ span: 14 }} lg={{ span: 8 }} xl = {{span: 9}} xxl={{span:7}}>
                <Input value={this.state.inputValue1} placeholder="Source link" className="animated zoomIn slow-2s delay-0s" onChange={(e)=> this.setState({
                  inputValue1: e.target.value
                })}/>
                <Input.TextArea value={this.state.inputValue2} autosize={{ minRows: 6, maxRows: 6 }} style={{resize: "none"}} placeholder="Add some text and tags … " className="animated zoomIn slow-2s delay-0s" onChange={(e)=> this.setState({
                  inputValue2: e.target.value
                })}/>
                <Button type="primary" className="animated zoomIn slow-2s delay-0s" onClick={this.onFromSend}> Submit  </Button>
                <ButtonText type="primary" icon="thunderbolt" isright="right" className="animated zoomIn slow-2s delay-0s" onClick={this.randomTextGenerate}> Get random text  </ButtonText>
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
