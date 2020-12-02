import {css} from '@emotion/react';
import styled from "@emotion/styled";

export const mainHome=css`
    width:100vw;
    height:100vh;
    overflow-x:hidden;
    h4{
        margin:3vh 0;
        display:block;
        text-align:center;
        line-height:30px;
    }
    text-align:center;
    .suhyeon-table{
        margin-top:30px;
        display:inline-block;
        text-align:left;
        th,td{
            text-align:center;
            padding:12px 0;
        }
    }
    .exp-color{
        display:block;
        text-align:center;
        div{
            position:relative;
            display:inline-block;
            .de{
                left:-25px;
                top:50%;
            }
            .en{
                left:-25px;
                top:50%;
            }
        }
    }
    .developing-now{
        color:green;
    }
`;
export const IndexTag=styled.i`
    display:inline-block;
    vertical-align:top;
    position:absolute;
    width:14px;
    height:8px;
    background-color:${props=>props.color||"pink"};
    
`;
