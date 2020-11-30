import {css} from "@emotion/react";
import {baseURL} from "../config/config";


export const lolHome=css`
    @font-face {
    font-family: 'HeirofLightBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/HeirofLightBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
section{
background: url(${baseURL+"/backgroundy.jpg"});
}
    
@media (min-width: 1024px) {
    .plz{
         height:100px;
    }
    
    .adv{
        margin: 20px auto 0;
        height:120px;
    }
    .enjoying{
        height:100%; 
    }
    .goto-enjoy{

    }
    .sub-title{
        font-size: 20px;
        line-height: 30px;
    }
    .gotobu{
        width:220px;
        height:50px;
    }
}

@media (max-width: 1023px) and (min-width: 678px) {
    
    .enjoying{
        height:100%; 
    }
    .plz{
        height:200px;
    }
    .sub-title{
        font-size: 20px;
        line-height: 30px;
        font-weight:bold;
    }
    .gotobu{
        width:220px;
        height:50px;
    }
}

@media (max-width: 677px) {
    section{
        width:100%;
        height:70vh;
        background: url(${baseURL+"/backgroundy.jpg"});
    }
    .enjoying{
        width:100%;
        height:100%; 
    }
    .goto-enjoy{
        padding-top:50px;
    }
    .sub-title{
        font-size:20px;
        font-weight:bold;
    }
    .gotobu{
        width:220px;
        height:50px;
    }
}

.adv{
    width:90%;
    text-align: center;
    position: relative;
}
.enjoying{   
    text-align: center;
    margin:0 auto;
   
}  
.goto-enjoy{
    background: url(${baseURL+"/forest.png"});  
    background-size:100% 100%; 
    width: 100%; 
    height: 100%;
    background-repeat: no-repeat;
    background-position: 50% 0%;
    display: table;
}

.plz{
    display: table-cell;
    vertical-align: middle;
    position: relative;
   
}

.sub-title{
    display: block;
    color:black;
    letter-spacing: 0px;
}

.gotobu{
    background-color:#0BC4E2 !important;
    border:0;
    box-shadow: 2px 1px 2px 1px #42463f33;
    border-radius: 2px;
    color: #F9F9F9;
}
.gotobu:hover{
    background-color: #00b2cf !important;
}
`;

export const lolHeader=css`
    display: table;
    border-bottom-left-radius: 26px;
    border-bottom-right-radius: 26px;
`;
export const lolFooter=css`

`;

export const lolCommon=css`
@font-face {
    font-family: 'NEXON Lv1 Gothic OTF Bold';
    src:
    url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF Bold.woff')
    format('woff');
    font-weight: normal;
    font-style: normal;
}
        font-size: 17px;
        background-color: #07121a;
        width: 100vw;
        position: relative;
        height: 100vh;
        
@media ( min-width : 1024px) {
    header {
        height: 150px;
    }
    section {
        height: 700px;
    }
    footer {
        min-height: 87px;
    }
    .main-title {
        height: 100px;
    }
    .big-title {
        font-size: 35px;
    }
    .back-home{
        top: 27%;
        left: 70%;
    }
}

@media ( max-width : 1023px) and (min-width: 678px) {
    font-size: 15px;
    header {
        height: 15%;
    }
    section {
        height: 700px;
    }
    footer {
        min-height: 17%;
    }
    .main-title {
        height: 100px;
    }
    .big-title {
        font-size: 35px;
    }
    .back-home{
        top: 27%;
        left: 80%;
    }
}

@media ( max-width : 677px) {
    font-size: 13px;
    header {
        height: 90px;
    }
    .main-title {
        height: 60px;
    }
    .big-title {
        font-size: 25px;
    }
}


a {
    color: black;
    text-decoration: none;
}

ul, li, ol {
    list-style: none;
}



header, footer {
    background-color: #12172630;
    width: 100%;
    position:relative;
}

.back-home{
    border:0;
    width:70px;
    height:70px;
    position:absolute;
}

.hoho{
    width:100%;
    height:100%;
    z-index:88;
}


.main-title {
    display: table-cell;
    vertical-align: middle;
    width: 90%;
    margin: 0 auto;
    padding: 15px 0;
}

.big-title {
    text-align: center;
    font-family: 'NEXON Lv1 Gothic OTF Bold';
    letter-spacing: 3px;
    color: rgb(194, 143, 44);
}
`;
export const lolSelect=css`
@keyframes selectbu {
  0%,
  100% {
    text-shadow: 0 0 3vw #7c55a8, 0 0 3vw #455789, 0 0 2vw #7460a5, 0 0 38vw #5d8b97, 0 0 18.4vw #2c00ff, 0.5vw 0.5vw 0.1vw #766392;
    color: #ffffff;
  }
  50% {
    text-shadow: 0 0 0.5vw #646f95, 0 0 1.5vw #3f3b53, 0 0 5vw #675b7d, 0 0 5vw #231c3e, 0 0 0.2vw #1d203d, 0.5vw 0.5vw 0.1vw #40385a;
    color: #9893bc;
  }
}
@media (min-width: 1024px) {
    section{
        height: 700px;
        width:90%;
        margin:0 auto;
    }
    .onet{
        height:650px;
    }
    .questy{
        font-size: 30px;
        padding-bottom: 60px;
    }
    .selectbu{
        height:70px;
        margin:0 15px;
        font-size:22px; 
        font-weight:bold;
    }

}

@media (max-width: 1023px) and (min-width: 678px) {
    section{
        height: 68%;
        width: 100%;
    }
    .questy{
        width:65%;
        margin:0 auto 40px;
        font-size:25px;
        line-height:30px;
    }
    .selectbu{
        font-size:20px;
        display:block;
        text-align:center;
    }
}

@media (max-width: 677px) {
    section{
        height: 65vh;
        width: 100%;
    }
    footer{
        height:20%;
    }
    .questy{
        width:80%;
        margin:0 auto 40px;
        font-size:20px;
        line-height:30px;
    }
    .selectbu{
        font-size:16px;
        display:block;
        text-align:center;
    }
}
section{
    background-size: 100% 100%;
    background: url(${baseURL+"/backgroundy2.jpg"});
    background-position: -300px 0; 
}
.loadiv{
    display:none;  
    width:10%;
    height:20%;
    margin:0 auto;
}


.loading{
    width:100%;
    height:30%;
}
.backgroundy{
    width:100%;
    height:100%;
    display: table;
}
.onet{
    display: table-cell;
    vertical-align: middle;
        text-align: center;
}
.questy{
    display:block;
    color: black;
    text-shadow: 1px 3px 8px white;   
    text-align:center;
}
 
.selecty{
    width:50%;
    margin: 0 auto;
    display:inline-block;
    float:left;
}
.selectbu{
      width:90%;
      margin:0 auto;
    background: none;  
    border: 0;
    border-radius: 6px;
    color:white;  
}

.selectbu {
  animation: selectbu 1s ease infinite;
  -moz-animation: selectbu 1s ease infinite;
  -webkit-animation: selectbu 1s ease infinite;
}



.selectbu:hover{
    animation:none;  
    color:black;
    transform:scale(1.1);  
    text-shadow:1px 1px 9px #00ffba;  
}

.mobu{
    width: 80%;
    margin: 0 auto;
}

`;
