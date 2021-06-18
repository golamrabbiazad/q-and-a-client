/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Head from "next/head";
import Header from "./components/Header";
import Home from "./components/Home";
import { fontFamily, fontSize, gray2 } from "../styles/Styles";

export default function App() {
  return (
    <div
      css={css`
        font-family: ${fontFamily};
        font-size: ${fontSize};
        color: ${gray2};
      `}
    >
      <Head>
        <title>Q and A</title>
        <meta name="description" content="qanda built using dot-net" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Home />
    </div>
  );
}
