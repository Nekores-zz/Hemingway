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
    .maint{
        width: 400px;
    height: 250px;
    border: solid 1px black;
    display: inline-block;
    }
    .maintt{

    }
    input,textarea, .DraftEditor-root{
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
    .ant-mention-wrapper{
        margin-bottom: 20px;
    }
    .ant-mention-wrapper .public-DraftEditorPlaceholder-root .public-DraftEditorPlaceholder-inner{
        color:#8dabc4;
    }
    .notranslate.public-DraftEditor-content > div > div > div > span > span{
        // color:#1785fb;
    }

    }
    .ant-mention-editor, .DraftEditor-root{
        margin-bottom:0;
         background-color: #f9f9fb !important;
        border-color: #f9f9fb;
        &:hover{
            box-shadow:none;
            border-color: #8dabc4;
        }
        &:focus{
            box-shadow:none;
            border-color: #8dabc4;
            outline: none;
        }
    }
    .ant-mention-wrapper.ant-mention-active:not(.disabled) .ant-mention-editor{
        border-color: #8dabc4;
        box-shadow: none;
    }
`;