import React from "react";
import Link from "next/link";

function Index () {
    return (
        <div>
            <div>
                <h4>This use TypeScript + React + Next + Emotion</h4>
                <ul>
                    <li>
                        <p>If you want see scrolling Data ,</p>
                        <p>and paging Data</p>
                        <Link href="/"><a>Click ME</a></Link>
                    </li>
                    <li>
                        <p>간단한 Emotion과 Redux</p>
                        <Link href="/baedal"><a>짭배민</a></Link>
                    </li>
                    <li>
                        <p>LOL</p>
                        <Link href="/"><a>Before(spring)</a></Link>
                        /
                        <Link href="/lol"><a>After(React)</a></Link>
                    </li>
                    <li>
                        <p>Gikal</p>
                        <Link href="/"><a>Before(spring)</a></Link>
                        /
                        <Link href="/"><a>After(React)</a></Link>
                    </li>
                    <li>
                        <p>??</p>
                        <Link href="/"><a>Click ME</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default Index;
