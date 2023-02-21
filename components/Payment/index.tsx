import React, { FC, useState } from "react";
import { RequestPayParams, RequestPayResponse } from "iamport-typings";
import styles from "./Payment.module.css";

const IMP_UID = process.env.NEXT_PUBLIC_IMP_UID ?? "";

const initialState: RequestPayParams = {
  pay_method: "card", // 결제수단
  name: "테스트 주문", // 주문명
  merchant_uid: "", // 주문번호
  amount: 1000, // 결제금액
  buyer_tel: "000-0000-0000", // 구매자 전화번호
};

const Payment: FC = () => {
  const [params, setParams] = useState<RequestPayParams>(initialState);
  const [result, setResult] = useState<RequestPayResponse>();

  const onClickPayment = () => {
    const { IMP } = window;
    if (IMP) {
      IMP.init(IMP_UID);

      IMP.request_pay(params, onPaymentAccepted);
    }
  };

  const onPaymentAccepted = (response: RequestPayResponse) => {
    console.log(response);
    setResult(response);
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.form}>
          <label className={styles.label}>IMP_UID</label>
          <input
            className={styles.input}
            value={IMP_UID}
            disabled
          />
        </div>
        <div className={styles.form}>
          <label className={styles.label}>결제수단</label>
          <input className={styles.input} value={params.pay_method} disabled />
        </div>
        <div className={styles.form}>
          <label className={styles.label}>결제금액</label>
          <input
            className={styles.input}
            type="number"
            value={params.amount}
            onChange={(e) =>
              setParams({ ...params, amount: e.target.valueAsNumber })
            }
          />
        </div>
        <div className={styles.form}>
          <label className={styles.label}>주문명</label>
          <input
            className={styles.input}
            value={params.name}
            onChange={(e) => setParams({ ...params, name: e.target.value })}
          />
        </div>
        <div className={styles.form}>
          <label className={styles.label}>전화번호</label>
          <input
            className={styles.input}
            value={params.buyer_tel}
            onChange={(e) =>
              setParams({ ...params, buyer_tel: e.target.value })
            }
          />
        </div>
        <button className={styles.button} onClick={onClickPayment}>
          결제하기
        </button>
      </div>
      {result && <pre>{JSON.stringify(result, null, " ")}</pre>}
    </>
  );
};

export default Payment;
