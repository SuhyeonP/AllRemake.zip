import {css} from "@emotion/css";
import {notMobile} from "../../css/gikal";
import {baseURL} from "../../config/config";
import React from "react";

const NotMobile=()=>{
    return (
        <div className={css(notMobile)}>
        <div className="only-pc">
            <p>모바일 전용페이지 입니다. pc로 확인하고싶다면 F12키를 누르고</p>
            <br/>
            <p>해당 버튼을 눌러주세용 😊</p>
            <div className="except-mobile">
                <img src={baseURL+"/f12.png"}/>
                <i></i>
            </div>
        </div>
    </div>
    )
}
export default NotMobile;
