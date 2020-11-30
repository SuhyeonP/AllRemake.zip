import React from "react";
import {css} from "@emotion/css";
import {IndexTag, mainHome} from "../css/mainHome";
import {myt} from '../exporthing/mytable'
import MyLin from "../component/myt";

function Index () {
    return (
        <div className={css(mainHome)}>
            <h4>This use <br/>TypeScript + React + Next + Emotion</h4>
            <div className="exp-color">
                <div>
                    <p><IndexTag className="de" color="green"/>:develop now</p>
                    <p><IndexTag className="en" color="black"/>:end now</p>
                </div>
            </div>
            <table className="suhyeon-table">
                <thead>
                <tr>
                    <th>순서</th>
                    <th>설명</th>
                    <th>링크</th>
                </tr>
                </thead>
                <tbody>
                {myt.map((ele,ind)=>{
                    return <MyLin key={ind} data={ele} develop={ele.developing} local={ele.local}/>
                })}
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
};

export default Index;
