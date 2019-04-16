import styled from "styled-components";
import LoginBgImage from "./../../images/Backgrounds/bg_01.png";

export const LoginPageWrapper = styled.div`
  background-image: url(${LoginBgImage});
  background-color: #f5f7fa;
  height: 100vh;
  // background-size: cover;
  .ant-layout {
    background-color: transparent;
  }
  .ant-layout-content {
    height: 100vh;
  }
  .ant-row-flex {
    height: 100vh;
  }
  ._LoginFormLogo {
    margin: auto;
    display: block;
    margin-bottom: 10px;
  }
  ._Title_H2 {
    font-size: 36px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.22;
    letter-spacing: 0.4px;
    text-align: center;
    color: #ffffff;
  }
`;
export const LoginFormStyle = styled.div`
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2);
  background-color: #1785fb;
  padding: 65px 0px;
  padding-bottom: 50px;
  input {
    border-radius: 4px;
    border: solid 1px #c5d9e8;
    background-color: #ffffff;
    height: 42px;
    line-height: 17px;
    font-size: 17px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.6px;
    color: #2c405a;

    &::placeholder {
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #8dabc4;
    }
  }
  .passwordInput {
    margin-bottom: 35px;
  }
  .usernameInput {
    margin-bottom: 12px;
  }
  .ant-form {
    padding: 0px 82px;
  }
  span button {
    margin-bottom: 30px;
  }
`;

export const ErrorAlert = styled.div`
  background: #1f46e9;
  padding: 20px 40px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  .ant-form-item:nth-child(0) {
    background: red;
  }
  ._error {
    margin: 0;
    margin-bottom: 5px;
    font-size: 17px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.06;
    letter-spacing: normal;
    color: #ff4c43;
  }
  ._text {
    margin: 0;
    font-size: 17px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: 0.6px;
    color: #ffffff;
  }
`;