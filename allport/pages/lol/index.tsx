import axios from "axios";
import {baseURL} from "../../config/config";
import React, {useCallback} from "react";
import {css} from "@emotion/css";
import AllMenu from "../../component/allC";
import {lolHome} from "../../css/lol";
import LoLLayout from "../../component/lol/layout";


function LOLMain (){

    const goSearch=useCallback(()=>{
        window.location.href="/lol/question/1"
    },[])

    return (
        <>
            <AllMenu/>
            <LoLLayout>
                <div className={css(lolHome)}>
                    <section>
                        <div className="enjoying">
                            <div className="goto-enjoy">
                                <div className="plz">
                                    <p className="sub-title">소환사의협곡에 오신것을 <br/>환영합니다.</p> <br/>
                                    <button onClick={goSearch} className="gotobu">검사 하러가기</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </LoLLayout>
        </>
    )
};



export default LOLMain;
