import { AppProps } from 'next/app'
import * as React from "react";
import {Global} from "@emotion/react";
import {commonCss} from "../css/common";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <>
        <Global styles={commonCss}/>
        <Component {...pageProps} />
      </>
  )
}
