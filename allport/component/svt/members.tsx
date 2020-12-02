import React from "react";
import Link from "next/link";
import {baseURL} from "../../config/config";

const MSI=({member})=>{


    return(
        <>
         <li>
             <div>
                 <Link href={"/svt/member/"+member.id}><a>
                 <img src={baseURL+member.src} className="member-simple-img wht"/>
                     <p className="member-name">{member.name}</p>
                 </a></Link>
             </div>
         </li>
        </>
    )

}
export default MSI;
