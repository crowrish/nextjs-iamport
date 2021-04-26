import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Payment } from "../components";

const IndexPage: NextPage = () => (
  <>
    <Head>
      <script src="https://code.jquery.com/jquery-1.12.4.min.js" />
      <script src="https://cdn.iamport.kr/js/iamport.payment-1.1.8.js" />
    </Head>
    <h1>Hello, Next.js + Typescript + Iamport👋</h1>

    <Payment />
  </>
);

export default IndexPage;
