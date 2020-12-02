import React, {useEffect} from "react";
import SVTAppLayout from "../../../component/svt/layout";
import axios from "axios";
import {baseURL} from "../../../config/config";
import MSI from "../../../component/svt/members";


const SVTMain=({data})=>{


    return(
        <SVTAppLayout>
            <ul className="main-list" >
                <h2 className="section-title">-&nbsp;Members&nbsp;-</h2>
                <div className="member-info">
                    <ul className="simple-info">
                        {data.map((x,y)=><MSI key={y} member={x}/>)}
                    </ul>
                </div>
            </ul>
        </SVTAppLayout>
    )
}

export default SVTMain;


export async function getStaticProps(){
    const res=await axios.get(baseURL+'/svt/members')
    const data=await res.data;
    return{
        props:{
            data
        }
    }
}
