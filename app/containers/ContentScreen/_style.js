import styled from "styled-components";
import Layout from "antd/lib/layout";
import backgroundImg1 from "./../../images/Backgrounds/bg_02.png"
export const LayoutStyle = styled(Layout)`
         background: url(${backgroundImg1});
         padding: 40px;
         border-top: 2px solid #d8e5ee;
         background-color: white;
         background-size: cover;
         height: 100%;
         @media (max-width: 1000px) {height: fit-content !important;}`;
