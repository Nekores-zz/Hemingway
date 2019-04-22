import styled from "styled-components";

import { Layout, Drawer, Button, Row, Col, Icon, Affix, Menu } from "antd";
const { Content, Header, Sider, Footer } = Layout;
export const LayoutLoginStyle = styled.div`
// background: red;
`;

// export default LayoutDefaultStyle;


export const LayoutDefaultStyle = styled(Layout)`
// background:red;

`;
export const DrawerStyle = styled(Drawer)`
         .ant-drawer-content {
           box-shadow: inset -6px 0 15px 0 rgba(15, 16, 16, 0.17);
           background-color: #2c405a;
           color: white;
         }
         .ant-drawer-body {
           padding: 14px;
         }
         .ant-drawer-header {
           background-color: #2c405a;
           color: white;
           padding: 21px 24px;
           border-bottom: 1px solid #425672;
         }
         .ant-drawer-close {
           height: 62px;
           width: 62px;
           color: rgba(205, 205, 205, 0.85);
         }
         .ant-drawer-title {
           color: rgba(205, 205, 205, 0.85);
         }
         h4._headings {
           text-transform: uppercase;
           opacity: 0.4;
           font-size: 11px;
           font-weight: 500;
           font-style: normal;
           font-stretch: normal;
           line-height: normal;
           letter-spacing: 1.7px;
           color: #ffffff;
           margin-top: 20px;
           padding: 5px 14px;
           border-bottom: 1px solid #425672;
           padding-bottom: 15px;
           margin-bottom: 0;
         }
         ul {
           margin-top: 15px;
           margin-bottom: 30px;
           padding: 0;

           li {
             list-style-type: none;

             a.navigation-item {
               display: block;
               padding: 10px 14px;
               border-radius: 4px;
               margin: 6px 0px !important;
             }
             a.navigation-item--active {
               background-color: #3f536e;
             }
             span {
               cursor: pointer;
               font-size: 15px;
               font-weight: normal;
               font-style: normal;
               font-stretch: normal;
               line-height: normal;
               letter-spacing: normal;
               color: #ffffff;
               text-transform: capitalize;
             }
           }
         }
         .ant-drawer-wrapper-body::-webkit-scrollbar {
           width: 12px;
         }

         .ant-drawer-wrapper-body::-webkit-scrollbar-track {
           background: #2c405a;
         }

         .ant-drawer-wrapper-body::-webkit-scrollbar-thumb {
           border: 4px solid #2c405a;
           background: #3f536e;
         }

         .ant-drawer-wrapper-body::-webkit-scrollbar-thumb:hover {
           background: #1785fb;
         }`;
export const HeaderTheme = styled(Header)`
  background-color: #1785fb;
  height: auto;
  ._barsIcon {
    color: white;
    font-size: 25px;
    position: relative;
    top: 3px;
    padding-top: 15px;
    padding-bottom: 24px;
    padding-right: 30px;
    border-right: 1px solid #ffffff40;
  }
`;