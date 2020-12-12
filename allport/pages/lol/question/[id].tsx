import AllMenu from "../../../component/allC";
import LoLLayout from "../../../component/lol/layout";
import {css} from "@emotion/css";
import {lolHome, lolSelect} from "../../../css/lol";
import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {baseURL} from "../../../config/config";
import {useRouter} from "next/router";
const alphabet=['a','b','c','d','e','f','g'];
const SelectZoneLOL=(data)=>{

    const question=useState(data.props.data[0].QUE_CONT)
    const answer=data.props.data1[0].ANS_CONT
    const answer2=data.props.data1[1].ANS_CONT
    const router=useRouter()
    const pN=Number(router.query.id)+1;

    useEffect(()=>{
        if(pN===2){
            sessionStorage.removeItem('select')
        }
    })

    const loaad=useCallback(()=>{
        let result=sessionStorage.getItem('select')

        if(pN===8){
            sessionStorage.setItem('select',result+alphabet[pN-2].toUpperCase())
            let makeAnswer=sessionStorage.getItem('select');
            alert('React와 Next로는 결과를 내기 어려운구조입니다.실제페이지로 돌아갑니다.')
            return window.location.href="http://ahah12k.cafe24.com/ptp1/"
        }else{
            if(result===null){
                sessionStorage.setItem('select',alphabet[pN-2].toUpperCase())
            }else{
                sessionStorage.setItem('select',result+alphabet[pN-2].toUpperCase())
            }
            //window.location.href="/lol/question/"+pN;
            console.log(alphabet[pN-2].toUpperCase())
            router.push("/lol/question/"+pN)
        }
    },[pN])

    const loaad2=useCallback(()=>{
        let result=sessionStorage.getItem('select')
        if(pN===8){
            sessionStorage.setItem('select',result+alphabet[pN-2])
            let makeAnswer=sessionStorage.getItem('select');
            alert('React와 Next로는 결과를 내기 어려운구조입니다.홈으로 돌아갑니다.')
            router.push('/');
        }else{
            if(result===null){
                sessionStorage.setItem('select',alphabet[pN-2])
            }else{
                sessionStorage.setItem('select',result+alphabet[pN-2])
            }
            // window.location.href="/lol/question/"+pN;
            console.log(alphabet[pN-2])
            router.push("/lol/question/"+pN)
        }
    },[pN])

    return (
        <>
            <AllMenu/>
            <LoLLayout>
                <div className={css(lolSelect)}>
                    <section>
                        <div className="backgroundy">
                            <div className="onet">
                                <h2 className="questy">{question}</h2>
                                <div className="mobu">
                                    <div className="selecty">
                                        <button type="button" onClick={loaad} id="leftBtn" className="selectbu">{answer}</button>
                                    </div>
                                    <div className="loadiv" id="waitt">
                                        <img src="" className="loading" id="loaad"/>
                                    </div>
                                    <div className="selecty">
                                        <button type="button" className="selectbu" id="rightBtn" onClick={loaad2}>{answer2}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </LoLLayout>
        </>
    )
};


SelectZoneLOL.getInitialProps=async(context)=>{
    const res=await axios.get(baseURL+"/lol/question/"+context.query.id)
    const data=await res.data
    const res1=await axios.get(baseURL+"/lol/answer/"+context.query.id)
    const data1=await res1.data
    const res2=await axios.get(baseURL+"/lol/spell/"+context.query.id)
    const data2=await res2.data
    return {
        props: {
            data,data1,data2
        }
    };
}

export default SelectZoneLOL;
