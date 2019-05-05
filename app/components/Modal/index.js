/**
 *
 * Modal
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { ModalStyle } from "./_style";

/* eslint-disable react/prefer-stateless-function */
class Modal extends React.Component {
  render() {
    return (
        <ModalStyle
          centered
          okText="Save"
          visible={
            this.props.visible
          }
          onOk={this.props.onOk}
          confirmLoading={this.props.confirmLoading}
          onCancel={this.props.onCancel}
        >
          <div className="_modalContent">
            <img src={this.props.avatar} alt="Profile Image" />
            <p className="_modalText">{this.props.modalText}</p>
            
          </div>
        </ModalStyle>
    );
  }
}

Modal.propTypes = {};

export default Modal;
