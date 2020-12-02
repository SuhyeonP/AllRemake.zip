import {css} from "@emotion/react";
import styled from "@emotion/styled";


export const commonCss=css`
    min-height:100vh;
    background: linear-gradient(to bottom, #92A8D1 5%, #F7CAC9);  
    @font-face {
        font-family: 'MaruBuri-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    @font-face {
        font-family: 'Recipekorea';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Recipekorea.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    
    @media (min-width: 1024px) {
        header h2 {
            font-size: 42px!important;
        }
        .main-list {
            padding: 9vh 0;
        }
    
        .main-list li {
            padding: 4vh 0;
            font-size: 28px;
        }
        .explain-seventeen > p {
            font-size: 22px;
            padding: 10px 0;
        }
    
        .member-info::-webkit-scrollbar {
            background-color: #92a8d173;
            height: 6px;
        }
    
        .member-info::-webkit-scrollbar-thumb {
            background-color: black;
        }
    
        .simple-info {
            display: inline-flex;
            padding:0 2vw 4vh;
        }
    
        .simple-info li {
            width: 25vw!important;
            height: 25vw!important;
            margin: 10px 10px 30px;
        }
    
        .simple-info li p {
            text-align: center;
            color: black;
        }
    
        .member-simple-img {
            display: block;
            width: 20vw!important;
            height: 20vw!important;
            margin: 0 auto 10px;
        }
    
        .member-section{
            width: 90vw;
            margin: 10px auto;
            text-align: center;
        }
        .member-section h2{
            padding-bottom: 35px;
            font-size: 29px;
        }
        .member-section table{
            margin: 30px auto;
            width: 40vw;
        }
        .member-section tr{
            padding: 3px;
        }
        .member-section td{
            padding: 15px 20px;
            font-size:20px;
        }
        .mini-text{
            font-size: 32px;
            margin-bottom:2vh;
        }
    }
    
    @media (max-width: 1023px)and (min-width: 678px) {
        header h2 {
            font-size: 42px!important;
        }
        .main-list {
            padding: 9vh 0;
        }
    
        .member-img{
            width: 45vw;
        }
        .member-section{
            width: 90vw;
            margin: 10px auto;
            text-align: center;
        }
        .member-section h2{
            padding-bottom: 35px;
            font-size: 29px;
        }
        .member-section table{
            margin: 30px 0;
        }
        .member-section tr{
            padding: 3px;
        }
        .member-section td{
            padding: 15px 20px;
            font-size:20px;
        }
    
        .main-list li {
            padding: 4vh 0;
            font-size: 28px;
        }
        .mini-text{
            font-size: 32px;
            margin-bottom:2vh;
        }
    
        .explain-seventeen div {
            line-height: 23.66px;
            font-size: 22px;
            padding: 10px 0;
            letter-spacing: 2px;
        }
        .explain-seventeen > p {
            font-size: 22px;
        }
    }
    
    @media (max-width: 677px) {
        body {
            overflow: hidden;
        }
    
        .member-img{
            width: 60vw;
        }
    
    
        .explain-seventeen div {
            line-height: 23.66px;
            font-size: 13px;
            padding: 10px 0;
        }
    
    
        .titlee {
            font-size: 25px;
            padding-bottom: 15px;
            font-family: 'Oswald', sans-serif;
            font-weight: 600;
            color: #333;
            letter-spacing: -1.625px;
        }
    
        .titlee span {
            font-family: 'Oswald', sans-serif;
            line-height: 15.6px;
            letter-spacing: 2px;
            color: #333;
            font-size: 20px;
        }
    
        .main-list {
            padding: 5vh 0;
        }
    
        .main-list li {
            padding: 20px 0;
            font-size: 22px;
        }
    
    
    
        .image-miri{
            display: inline-block;
        }
        .image-miri img{
            width: 100px;
            height: auto;
        }
        .antd-input input{
            display: block;
            width: 80vw;
            height: 6vh;
            padding: 5px 10px;
            font-size:17px;
            margin:10px auto;
        }
        .loginbtn{
            display: block;
            margin:0 auto;
            width: 30vw;
        }
        .uploadwrite{
            display: block;
    
            text-align: center;
        }
        .admini{
            margin-top: 10vh;
            height: 80vh;
        }
        .loading-member{
            display: table;
            height: 40vh;
            margin: 10px 0;
        }
        .loading-member p{
            display: table-cell;
            vertical-align: middle;
            font-size: 22px;
            font-weight: 800;
        }
        
        .member-section{
            margin: 10px auto;
        }
        .member-section h2{
            padding-bottom: 15px;
            font-size: 20px;
        }
        .member-section table{
            margin: 10px 0;
        }
        .member-section tr{
            padding: 3px;
        }
        .member-section td{
            padding: 5px 10px;
        }
        .mini-text{
            font-size: 17px;
        }
        .album-sec{
            width: 90vw;
            margin: 0 auto;
            display: block;
            text-align: center;
            padding: 15px 0 0;
            position: relative;
        }
        .album-img{
            width: 60vw;
            height: 60vw;
            background-color: #4b4b4b;
        }
    
        .mini-text{
            margin: 50px 0 10px;
        }
        .album-link{
            display: inline-block;
        }
        .next-btn{
            position: absolute;
            top: 50%;
            right: 2%;
            font-size: 20px;
        }
    }
    @media (max-width: 320px){
        header {
            height: 25vh;
        }
    }
    
    
    @keyframes neon {
        0%,
        100% {
            text-shadow: 0 0 1vw #92A8D1, 0 0 3vw #92A8D1, 0 0 10vw #92A8D1, 0 0 10vw #92A8D1, 0 0 .4vw #92A8D1, .5vw .5vw .1vw #806914;
            color: #F7CAC9;
        }
        50% {
            text-shadow: 0 0 .5vw rgba(198, 219, 255, 0.8), 0 0 1.5vw rgba(198, 219, 255, 0.8), 0 0 5vw rgba(198, 219, 255, 0.8), 0 0 5vw rgba(125, 158, 219, 0.8), 0 0 .2vw rgba(125, 158, 219, 0.9), .5vw .5vw .1vw rgba(125, 158, 219, 0.9);
            color: #ffe8e7;
        }
    }
    
    a {
        text-decoration: none;
        color: black;
    }
    * {
        margin: 0;
        padding: 0;
    }
    
    li, ul {
        list-style: none;
    }
    header h2 {
        animation: neon 1.7s ease infinite;
        -moz-animation: neon 1.7s ease infinite;
        -webkit-animation: neon 1.7s ease infinite;
        font-family: 'MaruBuri-Regular';
        letter-spacing: 2px;
    }
    header h2 {
        color: white;
        font-weight: 800;
        text-align: center;
        display: block;
        padding-top: 7vh;
        font-size: 31px;
        text-shadow: 3px 2px 6px #F7CAC9;
    }
    header {
        height: 16vh;
    }
    section {
        min-height: 74vh;
        padding-bottom: 1vh;
    }
    .section-title {
        text-align: center;
        display: block;
        font-size: 19px;
        font-family: 'Recipekorea';
        padding-top: 3vh;
    }
    
    
    
    .explain-seventeen p > span {
        color: #4b4b4b;
    }
    .seventeen-info {
        width: 100vw;
    }
    
    .main-list {
        display: block;
        text-align: center;
    }
    
    .main-list li {
        letter-spacing: 1px;
        font-family: 'Oswald', sans-serif;
        text-shadow: 4px 4px 9px #808080a8;
    }
    
    .main-list li a {
        display:inline-block;
        color: white;
        font-weight: 500;
    }
    
    
    
    .explain-seventeen > p {
        font-weight: 600;
        color: #6d6d6d;
        text-align: left;
        vertical-align: top;
    }
    
    .explain-seventeen div {
        color: #4b4b4b;
    }
    
    .seventeen-all {
        width: 65%;
        height: auto;
        margin: 5vh auto 2vh;
        display: block;
    }
    
    .explain-seventeen {
        width: 80vw;
        margin: 0 auto;
    }
    
    .member-info {
        width: 79vw;
        padding: 5vh 4vw 0;
        margin: 0 auto;
        overflow-x: scroll!important;
    }
    
    .member-info::-webkit-scrollbar {
        background-color: #92a8d173;
        height: 6px;
    }
    
    .member-info::-webkit-scrollbar-thumb {
        background-color: black;
    }
    
    .simple-info {
        display: inline-flex;
    }
    
    .simple-info li {
        width: 65vw;
        height: 65vw;
        margin: 10px 10px 30px;
    }
    
    .member-name {
        text-align: center;
        color: black;
        font-size:17px;
    }
    
    .member-simple-img {
        display: block;
        width: 50vw;
        height: 50vw;
        margin: 0 auto 10px;
    }
    
    .member-section{
        width: 90vw;
        margin:0 auto;
        text-align: center;
    }
    .member-section h2{
        margin-top:15px;
        font-family: 'Oswald', sans-serif;
        letter-spacing: 2px;
        color: #333;
    }
    .member-section table{
        display: block;
    }
    .member-section tr{
        display: block;
    }
    .yeardiv {
        display: block;
        width: 60vw;
        margin: 10px auto;
        text-align: center;
    }
    
    
    .yeardiv select {
        display: inline-block;
        height: 4vh;
        padding: 2px 8px 0;
        font-size: 14px;
        border: 1px solid #444;
        background-color: inherit;
    }
    
    .yeardiv select option {
        padding-left: 5px;
        background: grey;
        width: 20vw;
    }
    .going-table{
        width: 90vw;
        margin: 2vh auto;
        border-spacing: 0;
        border: 0.5px solid grey;
    }
    .going-table tbody{
        margin-top: 10px;
    }
    .going-table tr{
        text-align: center;
        font-size: 0;
        margin: 0;
    }
    .going-table td{
        font-size: 14px;
        border: 0.5px solid grey;
    }
    .album-sec{
        margin: 0 auto;
        display: block;
        text-align: center;
        position: relative;
    }
    .album-img{
        background-color: #4b4b4b;
    }
    
    .album-item>p{
        font-weight: 400;
        line-height: 17px;
    }
    .album-title{
        letter-spacing: 2px;
        font-family: 'Oswald', sans-serif;
    }
    .album-link{
        display: inline-block;
    }
    .mini-text{
        display: block;
        text-align: center;
        color: white;
        padding: 4px 0;
    }
    .album-item{
        padding:10px 0 20px;
    }
    .album-item>p{
        padding-top: 5px;
        font-weight: 400;
        line-height: 17px;
        font-size: 15px;
    }
    .album-title{
        font-size: 18px!important;
        letter-spacing: 2px;
        font-family: 'Oswald', sans-serif;
    }
`;
export const goings=css`
    margin:0 auto;
    li{
        a{
            display:inline-block;
        }
    }
    @media(max-width:677px){
        width:80vw;
        margin:0 auto;
        li{
            display:block;
            text-align:center;
            padding:10px 0;
            img{
                width:79%;
            }
        }
    }
    @media(min-width:678px){
    
    }
`;
