import axios from "axios";
import {baseURL} from "../../config/config";
import React, {useCallback, useEffect, useState} from "react";
import {css} from "@emotion/css";
import {test,changeBtn} from '../../css/baeminLayout'
import AllMenu from "../../component/allC";
import { Switch } from "antd";
import {useRouter} from "next/router";

function BadalUser (props) {

    const [user,setUser]=useState(true);
    const [shop,setShop]=useState(true);
    const router=useRouter();

    useEffect(()=>{

    },[props])

    const changeUser=useCallback((user)=>{
        console.log(`switch to ${user}`);
        if(user){
            setUser(false)
            setShop(true)
            console.log('chnage to shop')
            router.push('/baedal')
        }else{
            setUser(true)
            setShop(false)
            console.log('change to user')
            router.push('/baedal/user')
        }
    },[user])

    return (
        <div className={css(test)}>
            <AllMenu/>
            <div className="baemin">
                <div className="baedal site-button-ghost-wrapper">
                    <Switch checkedChildren="User" unCheckedChildren="Shop" className={css(changeBtn)} defaultChecked={user} onChange={changeUser} />
                    {!shop&&<p>Shop Only</p>}
                    {shop&&<p>User</p>}
                </div>
                <div>
                    {props.data.map(x=><span key={x.id}>{x.shopName}</span>)}
                </div>
            </div>
        </div>
    )
};

export async function getStaticProps() {
    const res=await axios.get(baseURL+"/baedal/mainShops?lastId="+0)
    const data=await res.data
    return {
        props: {
            data
        }
    };
};

// todo 로그인 서버사이드 getserversideprops로 로그인 구현하는건가?
// todo 사용자 switch버튼으로 주문하고 주문받고 구현
export default BadalUser;
