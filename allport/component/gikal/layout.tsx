import {css} from "@emotion/css";
import {gikal} from "../../css/gikal";
import NotMobile from "./notmobile";
import React from "react";

const GikalLayout=({children})=>{
    return (
        <div className={css(gikal)}>
            <header className="g-header">
                <div className="main-title">
                    <h2 className="title">귀멸의 칼날</h2>
                    <p className="small-title">:호흡 적성판별</p>
                </div>
                <a href="" className="return"><i className="hi"></i></a>
            </header>
            {children}
            <NotMobile/>
            <footer className="g-footer">
                <div className="fooot">본 문제들은 귀멸의 칼날 팬북출처, 해석은 개발자가 하였습니다. 오역 이해해주세요!</div>
            </footer>
        </div>
    )
}

export default GikalLayout;
