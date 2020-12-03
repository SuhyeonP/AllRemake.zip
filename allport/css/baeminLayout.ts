import {css} from "@emotion/react";

export const test=css`
    display:table;
    height:100vh;
    .main-tap{
        text-align:center;
        display:block;
        p{
            display:inline-block;
            text-decoration:underline;
            padding-bottom:12px;
            &:hover{
                transform:scale(1.2);
            }
        }
    }
    .help-change,.click-me{
        display:block;
        color:white;
        text-align:center;
        text-shadow:1px 1px 1px black;
    }
    .baemin{
        display:table-cell;
        width:100vw;
        vertical-align:middle;
        padding-bottom:40px;
    }
    .baedal{
        width:50vw;
        margin:0 auto;
        text-align:center;
    }
    .user-only{
        display:block;
        text-align:center;
    }
    .order-shop{
        display:block;
        text-align:center;
        padding:10px 0;
    }
    .shop-only{
        
    }
    .user-table{
        padding-top:15px;
        display:inline-block;
        thead{
            th{
                padding-bottom:15px;
            }
        }
        tbody{
            td{
                padding:5px 0;
            }
        }
    }
    .scroll-order{
        p{
            display:block;
            text-align:center;
            button{
                margin-left:8px;
                border:0;
                outline:0;
                background-color:inherit;
                &:hover{
                    transform:scale(1.2);
                }
            }
        }
        ul{
            padding-top:20px;
            width:70vw;
            margin:0 auto;
            text-align:center;
        }
        .order-item{
            margin:10px 0;
            width:70%;
            justify-content:space-between;
            display:inline-flex;
        }
    }
`;
export const changeBtn=css`
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
