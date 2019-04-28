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

import { Layout, Row, Col, Form, Icon } from "antd";
import {Button, IconButton} from "../../components/Elements/Button/"
import { LayoutStyle } from "./_style";
import LayoutAdmin from "../../components/Layouts/LayoutAdmin";

import Comment from "../../components/Comment/";
import Avatar1 from "../../images/Profiles/yulia.png";
import Avatar2 from "../../images/Profiles/alex.png";
import Avatar3 from "../../images/Profiles/mia.png";

/* eslint-disable react/prefer-stateless-function */
export class SupervisorScreen extends React.Component {
         constructor(props) {
           super(props);
         this.state = { noteText: `Anastasia is a great vegan cafe to meet friends. They have a delicious and nutritious breakfast with loads of tasty dips, good salads, and incredible cakes. They treat every dish like it is a multi-layered experience, they take all the senses into account.`,
        authorName: "Yulia" };
         }
         
          
         render() {
           return <div>
               <Helmet>
                 <title>Supervisor Screen</title>
                 <meta name="description" content="Description of SupervisorScreen" />
               </Helmet>
               <LayoutAdmin collapseAble={false}>
                 <LayoutStyle>
                   <Row className="animated zoomIn slow-2s delay-0s">
                     <Col xs={{ span: 24 }} sm={{ span: 23 }} md={{ span: 23 }} lg={{ span: 23 }} xl={{ span: 23 }} xxl={{ span: 23 }}>
                       <Comment 
                       Avatar={Avatar1} noteText={this.state.noteText} background="white" textnoteCounter="2/15"
                       authorName={this.state.authorName}
                      //  style={{"border-bottom": "1px dashed #d8e5ee !important"}}
                       />
                       <Comment Avatar={Avatar2} noteText={this.state.noteText} authorName={this.state.authorName}/>
                       <Comment Avatar={Avatar3} noteText={this.state.noteText} authorName={this.state.authorName}/>
                     </Col>
                   </Row>
                   <Row className="animated zoomIn slow-2s delay-0s">
                    <Col xs={{ span: 2 }} sm={{ span: 2 }} md={{ span: 2 }} lg={{ span: 2 }} xl={{ span: 2 }} xxl={{ span: 2 }}>
                    </Col>
                   <Col xs={{ span: 18 }} sm={{ span: 18 }} md={{ span: 18 }} lg={{ span: 19 }} xl={{ span: 19 }} xxl={{ span: 19 }}>
                   <Button type="primary" onClick={() => alert("You have click submit")} className="_btnMain">Submit</Button>
                   <IconButton icon="edit" />
                   <IconButton icon="delete" style={{float: "right"}} bg="#ffe9c1"/>
                   </Col>
                   <Col xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 4 }} xl={{ span: 4 }} xxl={{ span: 2 }}>
                    </Col>
                   </Row>
                 </LayoutStyle>
               </LayoutAdmin>
             </div>;
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
