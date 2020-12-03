import AllMenu from "../../../component/allC";
import {css} from "@emotion/css";
import React, {useCallback, useEffect, useState} from "react";
import axios from "axios";
import {baseURL, gikalURL} from "../../../config/config";
import {useRouter} from "next/router";
import GikalLayout from "../../../component/gikal/layout";
import NotMobile from "../../../component/gikal/notmobile";

const SelectZoneGikal=(data)=>{
    const router=useRouter()
    let count=router.query.gid;
    let sn=Number(count)
    let [cnn,setCnn]=useState(sn)

    const [question,setQuestion]=useState('loading')
    const [answer1,setAnswer1]=useState('loading')
    const [answer2,setAnswer2]=useState('loading')
    const [gikalImg,setGikalImg]=useState('')


    useEffect(()=>{
        setCnn(sn)
        setQuestion(data.props.question[0].QUE_CONT)
        setAnswer1(data.props.answer[0].ANS_CONT)
        setAnswer2(data.props.answer[1].ANS_CONT)
        setGikalImg(gikalURL+data.props.question[0].QUE_IMG)
    },[data])

    const gotoS=useCallback((selectNumber)=>{
        let t=cnn;
        if(selectNumber===0){
            if(sn===1){
                t+=1;
                return router.push("/gikal/selector/"+t)
            }else if(sn===2||sn===3){
                t+=2;
                return router.push("/gikal/selector/"+t)
            }else if(sn===4||sn===5||sn===6){
                t+=3;
                return router.push("/gikal/selector/"+t)
            }else{
                t-=6;
                return window.location.href="/gikal/result/"+t;
            }
        }else if(selectNumber===1){
            if(sn===1){
                t+=2;
                return router.push("/gikal/selector/"+t)
            }else if(sn===2||sn===3){
                t+=3;
                return router.push("/gikal/selector/"+t)
            }else if(sn===4||sn===5||sn===6){
                t+=4;
                return router.push("/gikal/selector/"+t)
            }else{
                t=cnn-5;
                return  window.location.href="/gikal/result/"+t;
            }
        }
    },[cnn])


    return (
        <>
            <AllMenu/>
            <GikalLayout>
                <section className="g-section">
                    <div className="qaa">
                        <div className="question">
                            <img src={gikalImg} className="qimg"/>
                            <p className="question-txt" >{question}</p>
                        </div>
                        <div className="answer">
                            <button className="selectbu" onClick={()=>gotoS(0)}>{answer1}</button>
                            <button className="selectbu" onClick={()=>gotoS(1)}>{answer2}</button>
                        </div>
                    </div>
                </section>
                <NotMobile/>
            </GikalLayout>
        </>
    )
};


SelectZoneGikal.getInitialProps=async(context)=>{
    const res1=await axios.get(baseURL+"/gikal/question/"+context.query.gid)
    const question=await res1.data
    const res2=await axios.get(baseURL+"/gikal/question/answer/"+context.query.gid)
    const answer=await res2.data
    return {
        props: {
            question,answer
        }
    };
}

export default SelectZoneGikal;
//{gikalURL+data.props.question[0].QUE_IMG}
