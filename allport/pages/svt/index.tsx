import React from "react";
import SVTAppLayout from "../../component/svt/layout";
import Link from "next/link";

const SVTMain=()=>{
    return(
        <SVTAppLayout>
            <ul className="main-list" >
                <li>
                    <Link href="/svt/aboutSeven"><a>About Seventeen</a></Link>
                </li>
                <li>
                    <Link href="/svt/member"><a>Member</a></Link>
                </li>
                <li>
                    <Link href="/svt/going"><a>Going Seventeen</a></Link>
                </li>
                <li>
                    <Link href="/svt/album"><a>Album</a></Link>
                </li>
            </ul>
        </SVTAppLayout>
    )
}

export default SVTMain;
