import React, {useCallback, useEffect, useRef, useState} from "react";
import SVTAppLayout from "../../../component/svt/layout";
import axios from "axios";
import {baseURL} from "../../../config/config";
import Goings from "../../../component/svt/goings";
import {css} from "@emotion/css";
import {goings} from "../../../css/svt";
import PagingBtn from "../../../component/svt/pagingBtn";

const GoingSvt=({data})=>{

    const [goingArr,setGoingArr]=useState(data.rows);
    const gLength=data.row.length;
    const pgLength=Math.ceil(gLength/3)
    const [current,setCurrent]=useState(1)
    const [pgArr,setPgArr]=useState<number[]>([])

    const gotoP=useCallback(async(pgNum)=>{
        setCurrent(pgNum)
        const getGoing=await axios.get(baseURL+"/svt/goings?lastId="+pgArr[pgNum-1])
        const changeArr=await getGoing.data;
        setGoingArr(changeArr.rows)
    },[])

    useEffect(()=>{
        for(let i=0;i<pgLength;i++){
            setPgArr(prevState => {
                prevState[i]=(i*3)
                return prevState
            })
        }
    },[])

    return(
        <SVTAppLayout>
            <h2 className="section-title">-&nbsp;Going&nbsp;-</h2>
            <ul className={css(goings)}>
                {goingArr.map((x,y)=><Goings key={y} going={x}/>)}
            </ul>
            <PagingBtn current={current} pgLength={pgLength} gotoP={gotoP}/>
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
