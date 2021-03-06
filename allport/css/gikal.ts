import {css} from "@emotion/react";
import styled from "@emotion/styled";
import {baseURL} from "../config/config";

export const gikal=css`
height:100vh;
@font-face {
    font-family: 'KOMACON';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_seven@1.2/KOMACON.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


@font-face {
    font-family: 'HeirofLightBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/HeirofLightBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Cafe24Danjunghae';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.1/Cafe24Danjunghae.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'MapoFlowerIsland';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoFlowerIslandA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'MapoFlowerIsland';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/MapoFlowerIslandA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@media (min-width: 1024px) {
    .g-header,.g-section,.g-footer{
        display:none;

    }
}

@media (max-width: 1023px) and (min-width: 678px) {
    .g-header,.g-section,.g-footer{
        display:none;
    }
}

@media (max-width: 677px) {
    font-family: 'HeirofLightBold';
    padding:0;
    margin:0;

    .g-header{
        position: relative;
    }
    .g-section{
        height:79vh;
        display:table;
        width:100%;
    }
    .g-header,.g-section,.g-footer{
        width:100%;
        background-color: black;
    }
    .g-footer{
        height:88px;
        display: table;

    }
    .fooot{
        display:table-cell;
        color:#3c3a3a;
        text-align: center;
        font-size: 9px;
        vertical-align: bottom;
    }
    .ttb{
        display: table-cell;
        vertical-align: middle;
        height:220px;
        text-align: center;
    }
    .qaa{
        padding:20px 0;
        display: block;
        height:100%;
    }
    .question{
        display:block;
        width:100%;
        text-align: center;
    }
    .qimg{
        width:90%;
        margin:0 auto 10px;
    }
    .question-txt{
        color:white;
        font-size: 20px;
    }
    .answer{
        display:block;
        height:70px;
        padding-top:15px;
        width:90%;
        margin:0 auto;
        text-align: center;
    }
    .selectbu{
        width:100%;
        padding:17px 0;
        background: inherit;
        border:0;
        display: block;
        color:#dad3ff;
        font-size: 17px;
        font-family: 'KOMACON';
    }

    .g-main{
        height:90%;
        width:100%;
        margin-bottom: 10px;
    }
    .gogo{
        display:inline-block;
        background-color: inherit;
        border:0;
        color:white;
        text-decoration: none;
    }

    .main-title{
        text-align: center;
        display: block;
    }
    .title{
        display: inline-block;
        color:white;
        font-size:28px;
        margin:12px 0;
    }
    .small-title{
        display: block;
        font-size: 11px;
        font-family: 'NEXON Lv1 Gothic OTF Bold';
        color:#ffffffb8;
        text-align: center;
        text-decoration: line-through;
    }
    .result-p{
        display: table-cell;
        vertical-align: middle;
        width:100%;
    }
    .result-imgs{
        display:block;
        width:100%;
        text-align: center;
    }
    .result-img{
        display:inline-block;
        height:auto;
        width:80%;
    }
    .result-txt{
        width:100%;
        margin-top:10px;
    }
    .result-title{
        font-size: 19px;
        display:block;
        color:white;
        text-align: center;
    }
    .result-breath{
        font-size: 22px;
        font-family: 'Cafe24Danjunghae';
    }
    .char-exp{
        width:90%;
        margin: 10px auto;
        font-size: 16px;
        color:white;
        font-family: 'MapoFlowerIsland';
    }
    .whois{
        color: white;
        text-align: center;
        padding: 10px 0;
    }
    .gobackM{
        color: white;
        display: block;
        text-align: center;
        padding-top:20px;
    }
      .container{
        height: 600px;
        display: table;
        width: 100%;
    }
    .more-see{
        display: table-cell;
        vertical-align: middle;
        background-color:black;
    }
    .mim{
        height: 190px;
        margin:5px 0;
        overflow-x: scroll;
        overflow-y: hidden;
        width: 90%;
        display: flex;
        margin:10px 15px;
    }
    .f1p,.f2p{
        display: inline-block;
        width: 80%;
        height: 100%;
        padding:3px;
    }
    .char-txt{
        color: white;
        font-family: 'MapoFlowerIsland';
    }
    .char-cont{
        font-size: 20px;
        width: 90%;
        margin: 0 auto;
    }
    .use-breath{
        font-size: 19px;
    }
    .use-exp{
        margin: 10px auto;
        width: 90%;
        font-family: 'KOMACON';
    }
    .buton-zip{
        display: block;
        text-align: center;
    }
    .next{
        width: 20px;
        height: 20px;
        border: 1px solid grey;
        background: inherit;
        color: aquamarine;
    }
}
`;
export const Breath=styled.span`
    color:${props=>props.color||"white"};
`;
export const notMobile=css`
@media (max-width: 677px){
    display:none;
}
@media (min-width: 678px){
    display:table;
    width:100vw;
    height:100vh;
    text-align:center;
    .only-pc{
        display:table-cell;
        vertical-align:middle;
        .except-mobile{
            display:inline-block;
            padding-top:20px;
            position:relative;
            img{
                width:150px;
                height:150px;
           }
           i{
                position:absolute;
                width:50px;
                height:50px;
                border-radius:50%;
                border: 3px solid red;
                z-index: 22;
                top: 43px;
                left: 70px;
            }
        }
    }
}
`;
