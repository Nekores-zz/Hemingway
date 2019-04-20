/**
 *
 * Button
 *
 */

import AntButton from 'antd/lib/button';
import styled from 'styled-components';

export const Button = styled(AntButton)`
  background-color: #56d86c;
  border-color: #56d86c;
  height: 44px;
  font-size: 17px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  box-shadow:none;
  &:focus {
    box-shadow:none;
    background-color: #44ca5a;
    border-color: #44ca5a;

  }
  &:hover {
    box-shadow:none;
    background-color: #44ca5a;
    border-color: #44ca5a;
  }
  &:active {
    box-shadow:none;
    background-color: #56d86c;
    border-color: #56d86c;
  }
`;

export const ButtonText = styled(Button)`
  background: transparent;
  border-color: transparent;
  box-shadow:none;
  font-size: 19px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.68;
  letter-spacing: normal;
  color: #292f36;
  color: ${props => props.colorText || "#292f36"};
  float: ${props => props.isright || "none"};
  
  &:focus {
    background-color: transparent;
    border-color: transparent;
    box-shadow:none;
    color: ${props => props.colorText || "#292f36"};

  }
  &:hover {
    background-color: transparent;
    border-color: transparent;
    box-shadow:none;
    color: ${props => props.colorText || "#292f36"};
  }
  &:active {
    background-color: transparent;
    border-color: transparent;
    box-shadow:none;
    color: ${props => props.colorText || "#292f36"};
  }
`;


