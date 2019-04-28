/**
 *
 * Comment
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {Row, Col} from "antd";
import {CommentStyle} from "./_style";
import CommentImg from "../../images/Icons/comment.png"

/* eslint-disable react/prefer-stateless-function */
class Comment extends React.Component {
  render() {
    return (
      <CommentStyle bg={this.props.background}>
        {this.props.background?(
          <Row className="animated zoomIn slow-2s delay-0s" style={{"border-bottom": "1px dashed #d8e5ee"}}>
              <Col xs={{ span: 4 }} sm={{ span: 3 }} md={{ span: 3 }} lg={{ span: 2 }} xl={{ span: 2 }} xxl={{ span: 2 }}>
                <div className="_textnoteCounter">
                    <h4>
                      {this.props.textnoteCounter}
                    </h4>
                </div>
              </Col>
              <Col xs={{ span: 16 }} sm={{ span: 18 }} md={{ span: 18 }} lg={{ span: 20 }} xl={{ span: 20 }} xxl={{ span: 20 }}>
                <div className="_commentBody">
                      <p className="_para"> {this.props.noteText}</p>
                  </div>
                  <ul>
                    
                      <li>
                        <img src={this.props.Avatar} alt="avatar" height="100px"/> 
                        </li>
                        <li>
                    <h4 className="_date"> Added by Yulia, April 22</h4>
                        </li>
                        <li>
                    <a href="#" className="_source"> Source</a>
                        </li>
                        <li>
                        <div className="_commentIcon">
                        <img src={CommentImg} alt="commentIcon"/> 
                </div>
                      </li>
                        
                  </ul>
              </Col>
               <Col xs={{ span: 4 }} sm={{ span: 3 }} md={{ span: 3 }} lg={{ span: 2 }} xl={{ span: 2 }} xxl={{ span: 2 }}>
               </Col>
            </Row>
        ):(
          <Row className="animated zoomIn slow-2s delay-0s">
              <Col xs={{ span: 4 }} sm={{ span: 3 }} md={{ span: 3 }} lg={{ span: 2 }} xl={{ span: 2 }} xxl={{ span: 2 }}>
                <div className="_avatar">
                    <img src={this.props.Avatar} alt="avatar" height="100px"/> 
                    <h4> {this.props.authorName}</h4>
                </div>
              </Col>
              <Col xs={{ span: 16 }} sm={{ span: 18 }} md={{ span: 18 }} lg={{ span: 20 }} xl={{ span: 20 }} xxl={{ span: 20 }}>
                <div className="_commentBody __commentBody">
                      <p className="_para"> {this.props.noteText}</p>
                  </div>
                  
              </Col>
              <Col xs={{ span: 4 }} sm={{ span: 3 }} md={{ span: 3 }} lg={{ span: 2 }} xl={{ span: 2 }} xxl={{ span: 2 }}>
                <div className="_commentIcon">
                    <img src={CommentImg} alt="commentIcon"/> 
                    {/* <h4> {this.props.authorName}</h4> */}
                </div>
              </Col>
            </Row>
        )}
        </CommentStyle>
    );
  }
}

Comment.propTypes = {};

export default Comment;
