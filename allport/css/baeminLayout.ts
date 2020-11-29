import {css} from "@emotion/react";

export const test=css`
    display:table;
    height:100vh;
    .baemin{
        display:table-cell;
        width:100vw;
        vertical-align:middle;
        padding-bottom:40px;
    }
    .baedal{
        width:50vw;
        margin:0 auto;
    }
`;
export const changeBtn=css`
    width:80px;
    height:32px;
    border-radius:4px;
    position:relative;
    display: inline-block;
    box-sizing: border-box;
    border: 0;
    border-radius: 100px;
    cursor: pointer;
    transition: all;
    user-select: none;
    &:focus {
       outline: 0;
    }
`;
