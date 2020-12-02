import CafeLayout from "../../component/cafe/cafeLayout";
import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../config/config";
import CafeList from "../../component/cafe/cafeList";
import {useRouter} from "next/router";

//const loadingCafe=[[{CAFE_NUM:1,CAFE_NAME:"LOADING",CAFE_ADDR:"LOADING",CAFE_INS:"LOADING",CAFE_IMG:"",VCT:0,LINK_MAP:"/"},{CAFE_NUM:1,CAFE_NAME:"LOADING",CAFE_ADDR:"LOADING",CAFE_INS:"LOADING",CAFE_IMG:"",VCT:0,LINK_MAP:"/"},{CAFE_NUM:1,CAFE_NAME:"LOADING",CAFE_ADDR:"LOADING",CAFE_INS:"LOADING",CAFE_IMG:"",VCT:0,LINK_MAP:"/"}]]

const Cafe3list=({data,length})=>{
    const [lastId,setLastId]=useState(data[data.length-1].CAFE_NUM)
    const [cafeArr,setCafeArr]=useState<any[]>(data)
    const cl=length[length.length-1].CAFE_NUM
    const moreCafe=useCallback(async()=>{
        if(lastId===cl){
            alert('마지막입니다')
            setLastId(0)
            setCafeArr(data)
            return;
        }
        const moreCafe=await axios.get(baseURL+'/cafe/all?lastId='+lastId)
        const cafeData=await moreCafe.data;
        setCafeArr(cafeData)
    },[cafeArr,lastId])

    useEffect(()=>{
        setLastId(cafeArr[cafeArr.length-1].CAFE_NUM)
    },[lastId])

    useEffect(()=>{//lastId바뀜
        setLastId(cafeArr[cafeArr.length-1].CAFE_NUM)
    },[cafeArr])

    return(
        <>
            <CafeLayout>
                <section>
                    <div className="not-mobile">
                        <div className="cafe-list">
                            {cafeArr.map((x,ind)=><CafeList key={ind} data={x}/>)}
                            <div className="more-button"><button onClick={moreCafe}>More</button></div>
                        </div>
                    </div>
                </section>
            </CafeLayout>
        </>
    )
}
export default Cafe3list;

export async function getStaticProps(){
    const res=await axios.get(baseURL+'/cafe/all?lastId=0')
    const data=await res.data;
    const len=await axios.get(baseURL+'/cafe/all/length')
    const length=await len.data;
    return{
        props:{
            data,length
        }
    }
}
