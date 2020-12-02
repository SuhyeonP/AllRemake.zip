import React from "react";
import {CafeLayOut} from "../../css/cafe";
import AllMenu from "../allC";
import Link from "next/link";

const CafeLayout=({children})=>{
   return(
       <>
           <AllMenu/>
           <CafeLayOut>
               <header>
                   <h2>CAF캎E</h2>
                   <Link href="/cafe"><a className="go-main">CAFE 메인 돌아가기</a></Link>
               </header>
               {children}
               <footer>
                   <div>
                       <p>삼덕동 카페 모아보기</p>
                       <p>Made by&nbsp;
                           <a target="_blank" rel="noopener noreferrer" href="https://github.com/SuhyeonP">Suhyeon</a>
                       </p>
                   </div>
               </footer>
           </CafeLayOut>
       </>
   )
}
export default CafeLayout;
