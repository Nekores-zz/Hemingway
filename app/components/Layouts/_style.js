import styled, { css } from "styled-components";

import { Layout, Drawer, Button, Row, Col, Icon, Affix, Menu } from "antd";
const { Content, Header, Sider, Footer } = Layout;
export const LayoutLoginStyle = styled.div`
// background: red;
`;

// export default LayoutDefaultStyle;


export const LayoutDefaultStyle = styled(Layout)`
// background:red;

`;
export const SiderStyle = styled(Sider)`
         box-shadow: inset -6px 0 15px 0 rgba(15, 16, 16, 0.17);
         background-color: #2c405a;
         color: white;
        //  right:0;
         padding: 20px;
        //  ${({ isshowsider }) => (isshowsider ? css`
                //       flex: unset !important;
                //       max-width: 0 !important;
                //       min-width: 0 !important;
                //       width: 0 !important;
                //       padding: 0 !important;
                //       left:-100%;
                //       padding:0;
                //       //  transition: 1s all ease-in-out;
                //  ` : css`
                //  `)};
         ${({ isshowsider }) => isshowsider == "false" && css`
             .ant-layout-sider-children{
              display:none;
             } 
             flex: unset !important;
             max-width: 0 !important;
             min-width: 0 !important;
             width: 0 !important;
             padding: 0 !important;
             //  left: 100%;
             padding: 0;`};
        
         
         ::-webkit-scrollbar {
           width: 12px;
         }

         ::-webkit-scrollbar-track {
           background: #2c405a;
         }

         ::-webkit-scrollbar-thumb {
           border: 4px solid #2c405a;
           background: #3f536e;
         }

         ::-webkit-scrollbar-thumb:hover {
           background: #1785fb;
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
         }`;

export const CommentSiderStyle = styled(Sider)`
         min-width: 354px !important;
         max-width: 354px !important;
         background: white;
         ._date {
           p {
             font-size: 16px;
             font-weight: normal;
             font-style: normal;
             font-stretch: normal;
             line-height: 1.25;
             letter-spacing: normal;
             text-align: center;
             color: #8dabc4;
             padding:20px;
             padding-bottom:0px;
           }
         }
         h3._title {
           display: block;
           width: 100%;
           font-size: 17px;
           font-weight: 500 !important;
           font-style: normal;
           font-stretch: normal;
           line-height: normal;
           letter-spacing: 0.6px;
           color: #2c405a;
           padding: 25px 20px;
           border-bottom: 1px solid #f0f5f8;
         }
         img._crossBtn {
           float: right;
           cursor: pointer;
           position: relative;
           top: -4px;
         }
         right: 0;
         ${({ iscommentbox }) => iscommentbox == "false" && css`
             .ant-layout-sider-children {
               display: none;
             }
             flex: unset !important;
             max-width: 0 !important;
             min-width: 0 !important;
             width: 0 !important;
             padding: 0 !important;
             padding: 0;`};
         ul {
           padding: 0;
           li {
             list-style: none;
             padding: 10px 20px;
           }
         }`;
export const HeaderTheme = styled(Header)`
         background-color: #1785fb;
         height: auto;
         ._brand {
           border-right: 1px solid #ffffff40;
           width: 70px;
           position: absolute;
           top: -32px;
           left: -28px;
           img {
             height: 48px;
           }
         }
         ._barsIcon {
           color: white;
           font-size: 25px;
           position: relative;
           top: 3px;
           padding-top: 18px;
           padding-bottom: 24px;
           padding-right: 24px;
           border-right: 1px solid #ffffff40;
           position: absolute;
           top: -31px;
           left: -28px;
         }`;