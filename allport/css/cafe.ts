import {css} from "@emotion/react";
import styled from "@emotion/styled";
import {baseURL} from "../config/config";

export const onlyImg = css`
  position: fixed;
  z-index: 5000;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  
  header{
      height: 44px;
      background: #e0e3da;
      position: relative;
      padding: 0;
      text-align: center;
      
      & h1 {
        margin: 0;
        font-size: 17px;
        color: #333;
        line-height: 44px;
      }
  }
  .slick-img{
      height: calc(100% - 44px);
      background: #090909;
  }
  .one-show{
      text-align: center;
      
      & img {
        margin: 0 auto;
        max-height: 60vh;
      }
  }
  .slick-slide {
    display: inline-block;
    width:100vw;
    padding:0;
  }
`;




export const CafeLayOut=styled.div`
    overflow-x:hidden;
    @font-face {
        font-family: 'MaruBuri-Regular';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/MaruBuri-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'paybooc-ExtraBold';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-07@1.0/paybooc-ExtraBold.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Recipekorea';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/Recipekorea.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    background-color:#fffff3;
    header{
        background-color:#e0e3da;
        display:block;
        text-align:center;
        h2{
            display:block;
            text-align:center;
            padding:15px 0;
        }
        ul{
            display:inline-flex;
            justify-content:center;
            li{
                padding:0 4px 7px;
                a{
                    color:black;
                }
            }
        }
        .go-main{
            line-height:29px;
        }
    }
    section{
        min-height:80vh;
    }
    footer{
        background-color:#7c7877;
        div{
            display:flex;
            justify-content:space-between;
        }
    }
    .cafe-home{
        display:table;
        height:100%;
        width:100vw;
        text-align:center;
        .main-page{
            display:table-cell;
            vertical-align:middle;
            a{
                color:#563a3a;
                font-size:22px;
                text-decoration:underline;
                padding:3px;
                font-weight:700;
                &:hover{
                    color:#4747c4;
                }
            }
        }
    }
    .more-button{
        display:block;
        text-align:center;
        button{
            display:inline-block;
            width:40px;
            height:40px;
            outline:0;
            &:hover,&:active{
                outline:0;
                transform:scale(1.2);
            }
            border:0;
            background-color:pink;
            border-radius:50%;
        }
    }
    @media(min-width:678px){
        header{
            li{
                &:hover{
                    transform:scale(1.2);
                    color:grey;
                }
            }
        }
        section{
            display:table;
            width:100vw;
            text-align:center;
            .not-mobile{
                display:table-cell;
                vertical-align:middle;
            }
        }
        .cafe-list{
            display:inline-flex;
            width:90vw;
            justify-content:space-between;
        }
        .more-button{
            display:block;
            position:relative;
            button{
                position:absolute;
                top:40%;
            }
        }
        footer{
            padding:4vh 2vh;   
        }
    }
    @media(max-width:677px){
        header{
            li{
                letter-spacing:-.2px;
                &:hover{
                    color:grey;
                }
            }
        }
        .cafe-list{
            padding:20px 0;
        }
        footer{
            padding:4vh 2vh;   
        }
    }
`;

export const cafeItem=css`
    display:block;
    text-align:center;
    .cafe-item{
        display:inline-block;
        background-color:#fffff3;
        img{
            z-index:1;
        }
        .wrap-cafe-item{
            margin:10px 0;
            display:inline-block;
            position:relative;
        }
        .cafe-exp{
            position:absolute;
            display:inline-flex;
            background-color:#3d3d3dab;
            z-index:12;
            .insta-small{
                padding-top:2px;
                font-family: 'MaruBuri-Regular';
                color:#c1c1c1;
                text-decoration:underline;
            }
            .cafe-title{
                padding-top:2px;
                color:black;
                font-family: 'paybooc-ExtraBold';
            }
        }
    }
    
    @media(max-width:677px){
        .wrap-cafe-item{
            width:60vw;
            height:60vw;
            img{
                width:60vw;
            }
            .cafe-exp{
                bottom:0;
                right:0;
                border-top-left-radius: 20px;
            }
        }
    }
    
    @media(min-width:678px){
        .wrap-cafe-item{
            width:28vw;
            height:28vw;
            img{
                width:26vw;
            }
            .cafe-exp{
                bottom: 38px;
                right: 0;
            }
            .insta-small{
                padding-right:5px;
            }
        }
    }
`;

export const errorPg=css`
    display:table;
    width:100vw;
    text-align:center;
    div{
        display:table-cell;
        vertical-align:middle;
        p{
            font-family: 'Recipekorea';
        }
    }
`;

export const singleCafe=css`
    .img-section{
        display:block;
        padding-top:20px;
        text-align:center;
        position:relative;
        .more-click{
            position:absolute;
            display:inline-block;
        }
        
    }
    .cafe-info{
        display:block;
        margin:10px auto;
        p{
            padding:2px 0;
            &a{
                text-decoration:underline;
            }
            font-family: 'MaruBuri-Regular';
        } 
        .cafe-title{
            font-family: 'Recipekorea';
            color:black;
            span{
                font-family: 'MaruBuri-Regular';
            }
        }
    }
    
    
    
    .closeBtn{
        color:white;
        position:absolute;
        cursor:pointer;
        text-shadow:2px 1px 5px black;
    }
    @media(min-width:678px){
        .img-section{
            .not-open-img{
                width:25vw;
            }
            .more-click{
                bottom: 12px;
                right: 400px;
                span{
                    &:hover{
                        color:navy;
                        transform:scale(1.5);
                    }
                }
            }
        }
        .closeBtn{
            top:12px;
            right:35px;
        }
        .one-show{
            padding:16vh 0;
        }
    }
    @media(max-width:677px){
        .img-section{
            img{
                width:60vw;
            }
            .more-click{
                bottom: 12px;
                right: 82px;
                span{
                    &:hover{
                        color:white;
                    }
                }
            }
        }
        .closeBtn{
            top:12px;
            right:35px;
        }
        .one-show{
            padding:22vh 0;
        }
        .cafe-info{
            display:block;
            width:60vw;
            margin:10px auto;
        }
    }
`;

export const menuTable=css`
    display:block;
    text-align:center;
    .menu-name{
        text-align:left;
    }
    .menu-price{
        text-align:right;
    }
    table{
        display:inline-block;
        th{
            text-align:left;
        }
        td{
            padding:5px;
            text-align:left;
        }
    }
    @media(max-width:677px){
        table{
            width:60vw;
            td{
                padding:2px 0;
            }
        }
        
    }
`;

export const CafeIMG=styled.img`
background:url(${props => props.src||baseURL+"/basic.jpg"});
`;
