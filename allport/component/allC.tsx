import React, {memo, useCallback} from "react";
import Link from "next/link";
import {css} from "@emotion/css";
import {allMenu} from "../css/common";

const AllMenu=()=>{
    const changeBack=useCallback(()=>{

    },[])

    return(
        <div className={css(allMenu)}>
         <Link href="/baedal"><a>배민</a></Link>
         <Link href="/"><a>Caf</a></Link>
         <Link href="/lol"><a>LOL</a></Link>
         <Link href="/"><a>귀칼</a></Link>
         <Link href="/"><a> 17 </a></Link>
         <Link href="/"><a>Data</a></Link>
         <Link href="/"><a>HOME</a></Link>
        </div>
    )
}
export default memo(AllMenu)
