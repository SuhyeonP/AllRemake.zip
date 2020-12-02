import React, {memo, useEffect, useState} from "react";
import {cafeItem,CafeIMG} from "../../css/cafe";
import {css} from "@emotion/css";
import {baseURL, cafeURL} from "../../config/config";
import Link from "next/link";

const CafeList=({data})=>{

    return(
        <div className={css(cafeItem)}>
            <div className="cafe-item">
                <Link href={"/cafe/single/"+data.CAFE_NUM}>
                    <a className="wrap-cafe-item">
                        <CafeIMG src={cafeURL+data.CAFE_IMG} />
                        <div className="cafe-exp">
                            &nbsp;&nbsp;
                            <p className="cafe-title">{data.CAFE_NAME}</p>
                            &nbsp;
                            <p className="insta-small">@{data.CAFE_INS}</p>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}
export default memo(CafeList);
