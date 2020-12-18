import axios from "axios";
import React, {memo, useCallback, useState} from "react";
import {baseURL} from "../../config/config";
import {useRouter} from "next/router";

const OrderReceipt=({orders})=>{
    const router=useRouter()
    const checkOrder=useCallback(async(orderId:number)=>{
        const yon=confirm(`${orders.menus} right?`)
        if(yon){
            const postOrder=await axios.get(baseURL+'/baedal/checkOrder/'+orderId);
            const data=await postOrder.data
            console.log(data)
            if(data==='success'){
                await router.push('/baedal/plz')
            }
        }else{
            return;
        }
    },[])

    return(
        <li className="order-item">
            <p>{orders.menus}</p>
            <p>{orders.price}원</p>
            {orders.orderSuccess===1?<p>checked</p>:<p className="youcanClick" onClick={()=>checkOrder(orders.id)}>not yet</p>}
        </li>
    )
}
export default memo(OrderReceipt);
