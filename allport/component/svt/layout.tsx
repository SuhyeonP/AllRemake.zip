import React from 'react';
import Link from 'next/link';
import AllMenu from "../allC";
import {commonCss} from "../../css/svt";
import {css} from "@emotion/css";

const SVTAppLayout = ({ children }) => {
    return (
        <>
            <AllMenu/>
            <div className={css(commonCss)}>
                <header>
                    <Link href="/svt">
                        <a><h2>Seventeen Right Here.</h2></a>
                    </Link>
                </header>
                <div className="wrapper">
                    <section>
                        {children}
                    </section>
                </div>
            </div>
        </>
    );
};

export default SVTAppLayout;
