import React, {memo, useEffect, useState} from "react";
import Link from "next/link";

const MyLin=({data,local,develop})=>{
    const [gotoLink,setGoLink]=useState(<Link href={data.link}><a>링크</a></Link>)

    useEffect(()=>{
        if(!local){
            setGoLink(<a target="_blank" rel="noopener noreferrer" href={data.link}>링크</a>)
        }
    },[])

    if(develop){
        return(
            <tr className="developing-now">
                <td>{data.id}</td>
                <td>{data.explain}</td>
                <td>{gotoLink}</td>
            </tr>
        )
    }

    return(
        <tr className="end-develop">
            <td>{data.id}</td>
            <td>{data.explain}</td>
            <td>{gotoLink}</td>
        </tr>
    )
}

export default memo(MyLin)
