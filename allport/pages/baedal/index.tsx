import axios from "axios";
import {baseURL} from "../../config/config";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {css} from "@emotion/css";
import {test,changeBtn} from '../../css/baeminLayout'
import AllMenu from "../../component/allC";
import { Switch } from "antd";
import {useRouter} from "next/router";
import OrderReceipt from "../../component/baedal/orderReceipt";
import MenuTable from "../../component/baedal/menuTable";
import {RedoOutlined} from "@ant-design/icons";
import styled from "@emotion/styled";
const menus=[{id:0,name:"마라탕",price:9000},{id:1,name:"뿌링클",price:18000},{id:2,name:"돼지갈비",price:7500}]

const ChangeImg=styled.img`
    display:inline-block;
    margin-top:20px;
    width:50vw;
    @media (max-width:677px){
        background-color:grey;
        width:70vw;
        height:20vh;
    }
    background:url(${props => baseURL+"/basic.jpg"||baseURL+props.src});
`;


function BadalMain ({data}) {
    const [user,setUser]=useState(false);
    const [shop,setShop]=useState(true);
    const [receipt,setReceipt]=useState(false);
    const [count,setCount]=useState(0);
    const router=useRouter();
    const [imgSrc,setImgSrc]=useState(baseURL+"/basic.jpg")

    useEffect(()=>{
        setCount(data.length)
    },[data])

    const changeUser=useCallback((checked)=>{
        console.log(`switch to ${checked}`);
        if(checked){
            console.log('chnage to shop')
            setUser(false)
            setShop(true)
        }else{
            console.log('change to user')
            setUser(true)
            setShop(false)
        }
    },[])

    const openReceipt=useCallback(()=>{
        if(receipt){
            setReceipt(false)
        }else{
            setReceipt(true)
        }
    },[receipt])

    const postOrder=useCallback(async (count:number)=>{
        const res=await axios.post(baseURL+"/baedal/inOrder?menu="+menus[count].name+"&price="+menus[count].price)
        const data=await res.data
        await alert(data)
    },[])
    const reloadOrder=useCallback(()=>{
        router.push('/baedal')
    },[])

    return (
        <div className={css(test)}>
            <AllMenu/>
            <div className="baemin">
                <div className="baedal site-button-ghost-wrapper">
                    <Switch className={css(changeBtn)} defaultChecked onChange={changeUser} checkedChildren="Go to User" unCheckedChildren="Go to shop" />
                </div>
                {user&&
                <div className="user-only">
                    <div>
                        <ChangeImg id="change-img" src={imgSrc}/>
                    </div>
                    <table className="user-table">
                        <thead>
                        <tr>
                            <th>Menu</th>
                            <th>Price</th>
                            <th>&nbsp;</th>
                            <th>주문하기</th>
                        </tr>
                        </thead>
                        <tbody>
                        {menus.map((ele,index)=>{
                            return <MenuTable imgSrc={imgSrc} setImgSrc={setImgSrc} key={index} postOrder={postOrder} Menu={ele}/>
                        })}
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </div>}
                {shop&&
                <div className="shop-only">
                    <span onClick={openReceipt} className="order-shop">주문확인하기</span>
                    {receipt&&
                    <div className="scroll-order">
                        <p>오늘 주문 건수 {count}개<button onClick={reloadOrder}><RedoOutlined /></button></p>
                        <ul>
                            {data.map((ele)=><OrderReceipt key={ele.id} orders={ele}/>)}
                        </ul>
                    </div>}
                </div>}
            </div>
        </div>
    )
};

export default BadalMain;

export async function getStaticProps(context) {
    // const cookie = context.req ? context.req.headers.cookie : '';
    // axios.defaults.headers.Cookie = '';
    // if (context.req && cookie) {
    //     axios.defaults.headers.Cookie = cookie;
    // }
    const res=await axios.get(baseURL+"/baedal/shopper/login?shopId="+6);
    const data=await res.data
    return {
        props: {
            data
        }
    };
};
