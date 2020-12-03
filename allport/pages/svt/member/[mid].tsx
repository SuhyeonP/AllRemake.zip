import React, {useEffect} from "react";
import SVTAppLayout from "../../../component/svt/layout";
import axios from "axios";
import {baseURL} from "../../../config/config";

const MID=({data})=>{
    const memberData=data[0]


    return(
        <SVTAppLayout>
            <div className="member-section">
                <>
                    <h2>{memberData.name}</h2>
                    <img src={baseURL+memberData.src} className="member-img"/>
                    <table>
                        <thead></thead>
                        <tbody>
                        <tr>
                            <td>&nbsp;</td>
                            <td>Birth:</td>
                            <td>{memberData.birth}</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>Part:</td>
                            <td>{memberData.part}</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>Test:</td>
                            <td>developing Now</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>Test:</td>
                            <td>developing Now</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                            <td>Test:</td>
                            <td>developing Now</td>
                        </tr>
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                </>
            </div>
        </SVTAppLayout>
    )
}

export default MID;


export async function getServerSideProps(context) {
    const sendD=await axios.get(baseURL+"/svt/member/"+context.query.mid)
    const member=await sendD.data;
    return {
        props: {
            data:member
        },
    }
}
