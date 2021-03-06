import React, {memo} from "react";
import Link from "next/link";
import {baseURL, s3URL} from "../../config/config";

const Goings=({going})=>{
    let setDate=new Date(going.dday)
    let theDay=setDate.toLocaleDateString()
    let realDay=theDay.slice(0,theDay.length-1)
    return(
        <li>
            <Link href={"/svt/going/"+going.id}><a>
                {going.prevImg&&<img src={s3URL+going.prevImg}/>}
                {!going.prevImg&&<img src={s3URL+"/svt/goingtest.png"}/>}
                <h3>{going.title}</h3>
                <p>{realDay}</p>
            </a></Link>
        </li>
    )
}

export default memo(Goings);
