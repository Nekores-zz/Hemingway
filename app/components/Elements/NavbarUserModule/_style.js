import styled from "styled-components";

export const NavbarUserModuleStyle = styled.ul`
         margin: 0;
         text-align: right;
         li {
           margin-right: 24px;
           display: inline-block;
           .ant-badge {
             position: relative;
             top: 6px;
             i {
               color: white;
               font-size: 30px;
             }
             sup {
               box-shadow: none;
               border: 4px solid #ff4c43;
             }
           }
           .ant-dropdown-link {
             margin-left: 15px;
             font-size: 15px;
             font-weight: normal;
             font-style: normal;
             font-stretch: normal;
             line-height: normal;
             letter-spacing: normal;
             color: #ffffff;
             i {
               font-size: 15px !important;
               font-weight: bold;
               position: relative;
               top: 0px;
               padding-left: 10px;
               border-left: 1px solid #ffffff26;
               height: 25px;
               margin-left: 8px;
               padding-top: 5px;
             }
           }
           ._avatar {
           }
         }`;