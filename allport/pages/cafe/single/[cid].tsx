import React, {useEffect, useMemo, useState} from "react";
import CafeLayout from "../../../component/cafe/cafeLayout";
import {baseURL} from "../../../config/config";
import axios from "axios";
import CafeLoading from "../../../component/cafe/loading";
import CafeError from "../../../component/cafe/error";
import {css} from "@emotion/css";
import {singleCafe} from "../../../css/cafe";
import CafeImages from "../../../component/cafe/imgZone/cafeImg";
import Link from "next/link";
import MenuSection from "../../../component/cafe/MenuSection";

const SingleCafe=(props)=>{
    const [cafeInfo,setCafeInfo]=useState(props.data.rows1[0])
    const [menuInfo,setMenuInfo]=useState(props.data.rows2)
    const [imgInfo,setImgInfo]=useState(props.data.rows3)

    useEffect(()=>{
        setImgInfo(props.data.rows3)
        setMenuInfo(props.data.rows2)
        setCafeInfo(props.data.rows1[0])
        console.log(menuInfo)
    },[props])

    if(props.data.rows1.length===0){//없는페이지
        return <CafeError/>
    }
    return (
        <>
            <CafeLayout>
                <section className={css(singleCafe)}>
                    <CafeImages onImg={cafeInfo.CAFE_IMG} images={imgInfo}/>
                    <div className="cafe-info">
                        <Link href={"https://www.instagram.com/"+cafeInfo.CAFE_INS}><a target="_blank" rel="noopener noreferrer" ><p className="cafe-title">{cafeInfo.CAFE_NAME}<span>&nbsp;&nbsp;&nbsp;({cafeInfo.CAFE_TIME})</span></p></a></Link>
                        <p>주소:&nbsp;<a target="_blank" rel="noopener noreferrer" href={cafeInfo.LINK_MAP}>{cafeInfo.CAFE_ADDR}</a></p>
                    </div>
                    <MenuSection menus={menuInfo}/>
                </section>
            </CafeLayout>
        </>
    )
}
export default SingleCafe;

export async function getServerSideProps(context) {
    const sendD=await axios.get(baseURL+"/cafe/"+context.query.cid)
    const cafeData=await sendD.data;
    return {
        props: {
            data:cafeData
        },
    }
}
