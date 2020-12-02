import AllMenu from "../../../component/allC";
import React, { useEffect, useState} from "react";
import axios from "axios";
import {baseURL, gikalURL} from "../../../config/config";
import GikalLayout from "../../../component/gikal/layout";
import Link from "next/link";
import {Breath} from "../../../css/gikal";
import {useRouter} from "next/router";

const SelectZoneGikal=(data)=>{

    const [breath,setBreath]=useState('loading')
    const [explain,setExplain]=useState('loading')
    const [Img,setImg]=useState('')
    const [color,setColor]=useState<string|null>()
    const [name,setName]=useState('')
    const [numb,setNumb]=useState(1)

    const router=useRouter()
    useEffect(()=>{
        console.log(data)
        console.log(data.props.breath[0])
        setBreath(data.props.breath[0].BREATH_NM)
        setColor(data.props.breath[0].color)
        setExplain(data.props.character[0].CHAR_EXP)
        setImg(gikalURL+data.props.character[0].CHAR_IMG1)
        setName(data.props.character[0].CHAR_NM)
        setNumb(Number(router.query.rid))
    },[data])

    if(!data){
        return <div>wait</div>
    }

    return (
        <>
            <AllMenu/>
            <GikalLayout>
                <section className="g-section">
                    <div className="result-imgs">
                        <img src={Img} className="result-img"/>
                    </div>
                    <div className="result-txt">
                        <h2 className="result-title">
                            당신은
                            <Breath className="result-breath" color={color}>&nbsp;{breath}&nbsp;</Breath>
                            의 호흡과 잘 맞는군요.
                        </h2>
                        <p className="whois">{name}</p>
                        <p className="char-exp">{explain}</p>
                    </div>
                    <Link href="/gikal"><a className="gobackM">돌아가기</a></Link>
                    <Link href={"/gikal/character/"+numb}><a className="gobackM">호흡 더 보기</a></Link>
                </section>
            </GikalLayout>
        </>
    )
};


SelectZoneGikal.getInitialProps=async(context)=>{
    const res1=await axios.get(baseURL+"/gikal/result/"+context.query.rid)
    const breath=await res1.data
    const res2=await axios.get(baseURL+"/gikal/result/char/"+context.query.rid)
    const character=await res2.data
    if(!breath||!character){
        return <div>hi</div>
    }

    return {
        props: {
            breath,character
        }
    };
}

export default SelectZoneGikal;
