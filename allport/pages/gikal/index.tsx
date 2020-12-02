import GikalLayout from "../../component/gikal/layout";
import Link from "next/link";
import AllMenu from "../../component/allC";
import React from "react";
import NotMobile from "../../component/gikal/notmobile";

const GikalMain=()=>{
    return (
        <>
            <AllMenu/>
            <GikalLayout>
                <section className="g-section">
                    <div className="ttb">
                        <img src="http://ahah12k.cafe24.com//ptp2/resources/img/img.png" className="g-main"/>
                        <Link href="/gikal/selector/1"><a className="gogo">검사하러가기</a></Link>
                        <NotMobile/>
                    </div>
                </section>
            </GikalLayout>
        </>
    )
}

export default GikalMain;
