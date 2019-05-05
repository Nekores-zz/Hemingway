import styled from "styled-components";
import AntMention from "antd/lib/mention";

export const MentionStyle = styled(AntMention)`
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

