import React, {useEffect, useState} from "react";
import SVTAppLayout from "../../../component/svt/layout";
import axios from "axios";
import {baseURL} from "../../../config/config";
import Goings from "../../../component/svt/goings";
import {css} from "@emotion/css";
import {goings} from "../../../css/svt";

const GoingSvt=({data})=>{

    const [goingArr,setGoingArr]=useState(data)

    useEffect(()=>{
        console.log(goingArr)
    },[])

    return(
        <SVTAppLayout>
            <h2 className="section-title">-&nbsp;Going&nbsp;-</h2>
            <ul className={css(goings)}>
                {goingArr.map((x,y)=><Goings key={y} going={x}/>)}
            </ul>
        </SVTAppLayout>
    )
}

export default GoingSvt;

export async function getServerSideProps() {
    const res=await axios.get(baseURL+"/svt/goings?lastId=0");
    const data=await res.data
    return {
        props: {
            data
        }
    };
}
