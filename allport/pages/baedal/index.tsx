import axios from "axios";
import {baseURL} from "../../config/config";
import React from "react";
import {css} from "@emotion/css";
import {test} from '../../css/baeminLayout'
import AllMenu from "../../component/allC";
import Link from "next/link";

function BadalMain ({data}) {

    return (
        <div className={css(test)}>
            <AllMenu/>
            <div className="baemin">
                <Link href="/baedal/plz"><a>goto order</a></Link>
            </div>
        </div>
    )
};

export default BadalMain;

export async function getStaticProps(context) {
    // const cookie = context.req ? context.req.headers.cookie : '';
    // axios.defaults.headers.Cookie = '';
    // if (context.req && cookie) {
    //     axios.defaults.headers.Cookie = cookie;
    // }
    const res=await axios.get(baseURL+"/baedal/shopper/login?shopId="+6);
    const data=await res.data
    return {
        props: {
            data
        }
    };
};
