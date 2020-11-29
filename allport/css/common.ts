import {css} from "@emotion/react";

export const commonCss = css`
    *{
        margin:0;
        padding:0;
        position:relative;
    }
    a{
        text-decoration:none;
    }
    ul,li{
        list-style:none;
    }
    margin:0;
    padding:0;
`;

export const allMenu=css`
    display:inline-block;
    position:fixed;
    width:50px;
    top:34%;
    z-index:22;
    a{
        display:block;
        text-align:center;
        padding:4px 0;
        color:#0085ff;
        font-size:13px;
    }
`;
