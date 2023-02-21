import React from "react";
import { NextPage } from "next";
import Script from "next/script";
import { Payment } from "../components";

const IndexPage: NextPage = () => (
  <>
    <Script src="https://code.jquery.com/jquery-1.12.4.min.js" strategy="beforeInteractive"/>
    <Script src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js" strategy="beforeInteractive" />
    <h1>Hello, Next.js + Typescript + Iamport👋</h1>

    <Payment />
  </>
);

export default IndexPage;
