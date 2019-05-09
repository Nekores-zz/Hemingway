import styled from "styled-components";
import AntModal from "antd/lib/modal";

export const ModalStyle = styled(AntModal)`
         textarea {
           border-radius: 4px;
           border: solid 1px #c5d9e8;
           :focus {
             box-shadow: none;
             border: solid 1px #1785fb;
           }
           :hover {
             border: solid 1px #1785fb;
           }
         }
         .ant-modal-content {
           padding-left: 20px;
           padding-right: 20px;
           padding-bottom: 20px;
         }
         ._modalContent {
           img {
             height: 48px;
             border-radius: 16px;
             border: solid 1px rgba(0, 0, 0, 0.05);
             display: block;
             margin: auto;
             margin-top: 35px;
             margin-bottom: 14px;
           }
           ._modalText {
             font-size: 15px;
             font-weight: normal;
             font-style: normal;
             font-stretch: normal;
             line-height: 1.27;
             letter-spacing: normal;
             color: #8dabc4;
           }
         }
         .ant-modal-footer {
           border-top: none;
         }
         .ant-modal-footer div button:nth-child(1) {
           display: none;
         }
         .ant-modal-footer div button:nth-child(2) {
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
           box-shadow: none;
           &:focus {
             box-shadow: none;
             background-color: #44ca5a;
             border-color: #44ca5a;
           }
           &:hover {
             box-shadow: none;
             background-color: #44ca5a;
             border-color: #44ca5a;
           }
           &:active {
             box-shadow: none;
             background-color: #56d86c;
             border-color: #56d86c;
           }
         }`;

