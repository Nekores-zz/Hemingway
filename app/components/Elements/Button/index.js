/**
 *
 * Button
 *
 */

import AntButton from 'antd/lib/button';
import styled from 'styled-components';

const Button = styled(AntButton)`
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
  &:hover {
    background-color: #44ca5a;
    border-color: #44ca5a;
  }
  &:active {
    background-color: #56d86c;
    border-color: #56d86c;
  }
`;

export default Button;
