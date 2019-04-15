/**
 *
 * Button
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Button({ children, ...rest}) {
  return <button {...rest}>{children}</button>;
}

Button.propTypes = {};

export default Button;
