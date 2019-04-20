import styled from "styled-components";
import LayoutDefault from "../../../components/Layouts/layoutDefault";

export const TextNoteStyle = styled.div`
    padding: 40px;
    border-top: 2px solid #d8e5ee;
    background-color: white;
    height: 100%;
    textarea{
        padding-top: 10px;
    }
    input,textarea{
        border-radius: 4px;
        height: 44px;
        background-color: #f9f9fb;
        border-color: #f9f9fb;
        font-size: 19px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #292f36;
        margin-bottom: 20px;
        ::placeholder{
            color:#8dabc4;
        }
        &:hover{
            box-shadow:none;
            border-color: #8dabc4;
        }
        &:focus{
            box-shadow:none;
            border-color: #8dabc4;
        }
    }
`;