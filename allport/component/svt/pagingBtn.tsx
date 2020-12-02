import React, {memo, useCallback, useEffect, useMemo, useState} from "react";
import {css} from "@emotion/css";
import {pageBtn, PGnow} from "../../css/svt";

const PagingBtn=({gotoP,current,pgLength})=>{
    let pgBtn:number[]=[];
    const countPage=3;
    const [startPg,setStartPg]=useState(((current-1)/countPage)*countPage+1)
    const [endPg,setEndPg]=useState(startPg+countPage-1)

    useEffect(()=>{
        let h=(Math.floor((current-1)/countPage))*countPage+1
        setStartPg(h)
        setEndPg(h+countPage-1)
    },[current])

    if(endPg>pgLength){
        for(let i=startPg;i<=pgLength;i++){
            pgBtn.push(i)
        }
    }else{
        for(let i=startPg;i<=endPg;i++){
            pgBtn.push(i)
        }
    }

    return(
        <div className={css(pageBtn)}>
            <ul>
                {current!==1&&<li><PGnow color="white" onClick={()=>gotoP(1)} type="button">첨</PGnow></li>}
                {current>1&&<li><PGnow onClick={()=>gotoP(current-1)} type="button">전</PGnow></li>}
                {pgBtn.map((x,y)=>{
                    if(x===current){
                        return <li key={y}><PGnow color="#d4becb" onClick={()=>gotoP(x)} type="button">{x}</PGnow></li>
                    }
                    return <li key={y}><PGnow onClick={()=>gotoP(x)} type="button">{x}</PGnow></li>
                })}
                {current<pgLength&&<li><PGnow onClick={()=>gotoP(current+1)} type="button">후</PGnow></li>}
                {pgLength!==current&&<li><PGnow onClick={()=>gotoP(pgLength)} type="button">끝</PGnow></li>}
            </ul>
        </div>
    )
}
export default memo(PagingBtn);
