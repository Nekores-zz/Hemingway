/**
 *
 * Modal
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { ModalStyle } from "./_style";
import Input from "../Elements/Input/"
/* eslint-disable react/prefer-stateless-function */
class Modal extends React.Component {
  render() {
    return (
        <ModalStyle
          centered
          okText={this.props.okText}
          visible={
            this.props.visible
          }
          onOk={this.props.onOk}
          confirmLoading={this.props.confirmLoading}
          onCancel={this.props.onCancel}
        >
          <div className="_modalContent">
            <img src={this.props.avatar} alt="Profile Image" />
            <p className="_modalText">Write a comment to {this.props.commentTo}</p>
            <Input.TextArea
                  value={this.props.value}
                  autosize={{ minRows: 4, maxRows: 4 }}
                  placeholder={this.props.placeholder}
                  onMouseUp={this.props.onMouseUp}
                  onChange={e => this.props.onChange(e)}
                  
                />
          </div>
        </ModalStyle>
    );
  }
}

Modal.propTypes = {};

export default Modal;
