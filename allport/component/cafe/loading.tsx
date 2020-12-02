import CafeLayout from "./cafeLayout";
import React, {memo} from "react";
import {css} from "@emotion/css";
import {errorPg} from "../../css/cafe";

const CafeLoading=()=>{
    return (
        <>
            <CafeLayout>
                <section className={css(errorPg)}>
                    <div>
                       <p> loading now</p>
                    </div>
                </section>
            </CafeLayout>
        </>
    )
}

export default memo(CafeLoading);
