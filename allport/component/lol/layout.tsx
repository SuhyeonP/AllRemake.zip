import {css} from "@emotion/css";
import {lolCommon, lolFooter, lolHeader} from "../../css/lol";
import Link from "next/link";


const LoLLayout=({children})=>{
    return (
        <div className={css(lolCommon)}>
            <header className={css(lolHeader)}>
                <div className="main-title">
                    <h2 className="big-title">성격별 롤 캐릭터 찾기</h2>
                    <Link href="/lol">
                        <a className="back-home">
                            <img src="http://ahah12k.cafe24.com/ptp1/resources/img/home.gif" className="hoho"/>
                        </a>
                    </Link>
                </div>
            </header>
            {children}
            <footer className={css(lolFooter)}>
                <p className="none">상업적 사용X</p>
                <p className="none">모든 사진의 출처는 Leage of Legend 공식 홈페이지 와 공식인스타그램 입니다.</p>
            </footer>
        </div>
    )
}
export default LoLLayout;
