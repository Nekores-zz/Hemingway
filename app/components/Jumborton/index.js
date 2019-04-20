/**
 *
 * Jumborton
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {JumbortonStyle} from "./_style";
// import { NavLink } from "react-router-dom";
import {Button, ButtonText} from "../Elements/Button";
/* eslint-disable react/prefer-stateless-function */
class Jumborton extends React.Component {
  render() {
    return (
    <JumbortonStyle>
      {(this.props.image) ? (<img src={this.props.image} alt={this.props.alt}/>) 
      : (<div className="_thePic" style={this.props.stylePic}></div>)
      }
        <h2 className="_mainTitle">{this.props.mainTitle}</h2>
        <p className="_para"> {this.props.para}</p>
        <Button type="primary" onClick={this.props.primarybuttonClick} className="_btnMain">{this.props.primaryButtonName}</Button>
        <br/>
        <ButtonText type="primary" className="_btnLast">{this.props.secondaryButtonName} </ButtonText>
      </JumbortonStyle>
      );
  }
}

Jumborton.propTypes = {};

export default Jumborton;
