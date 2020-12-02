import CafeLayout from "./cafeLayout";
import {errorPg} from "../../css/cafe";
import {css} from "@emotion/css";
import React, {memo} from "react";

const CafeError=()=>{
    return (
        <>
            <CafeLayout>
                <section className={css(errorPg)}>
                    <div>
                        <p>없는 페이지 입니다<br/> 404 Error</p>
                    </div>
                </section>
            </CafeLayout>
        </>
    )
}

export default memo(CafeError);
