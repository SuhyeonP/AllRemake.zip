import React, {useEffect, useState} from "react";
import Link from "next/link";
import SVTAppLayout from "../../../component/svt/layout";
import ImageG from "../../../component/svt/goingImg";
import axios from "axios";
import {baseURL} from "../../../config/config";
import {css} from "@emotion/css";
import {goingDetail} from "../../../css/svt";
import Head from "next/head";

const noImg=[{src:'goingtest.png'}];

const GoingSeven = (props) => {
    const [goingInfo, setGoingInfo] = useState(props.data.rows[0])
    const [imgArr, setImgArr] = useState<string[] | null>(props.data.row)
    let setDate = new Date(goingInfo.dday)
    let theDay = setDate.toLocaleDateString()
    let realDay = theDay.slice(0, theDay.length - 1)
    useEffect(() => {
        setGoingInfo(props.data.rows[0])
        setImgArr(props.data.row)
    }, [props])


    return (
        <>
            <Head>
                <title>Going Seventeen</title>
            </Head>
            <SVTAppLayout>
                <div className={css(goingDetail)}>
                    <a className="going-title" href={goingInfo.link} target="_blank" rel="noopener noreferrer">
                        {goingInfo.title}
                    </a>
                    {imgArr.length !== 0 && <ImageG images={imgArr}/>}
                    {imgArr.length === 0 && <ImageG images={noImg}/>}
                    <p className="goto-youtube">제목을 클릭하면 유튜브로 가져용!</p>
                    <p className="going-explain">{goingInfo.explain}</p>
                </div>
            </SVTAppLayout>
        </>
    )
}


export default GoingSeven;

export async function getServerSideProps(context) {
    const res = await axios.get(baseURL + "/svt/going/" + context.query.gid)
    const data = await res.data;
    return {
        props: {
            data: data
        },
    }
}
