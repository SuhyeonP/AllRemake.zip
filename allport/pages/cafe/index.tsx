import React from "react";
import CafeLayout from "../../component/cafe/cafeLayout";
import Link from "next/link";

const CafeMain=()=>{
    return (
        <>
            <CafeLayout>
                <section className="cafe-home">
                    <p className="main-page">
                        본페이지의 원본버전은
                        <br/>
                        <br/>
                        <a target="_blank" rel="noopener noreferrer" href="http://ahah12k.cafe24.com/jin/">이곳</a>
                        을 이용해 주세용😃
                        <br/>
                        <br/>
                        작은 기능은 구현해뒀습니당
                        <br/>
                        <br/>
                        <Link href="/cafe/cafe3list">기능보러가기→</Link>
                    </p>
                </section>
            </CafeLayout>
        </>
    )
}
export default CafeMain;
