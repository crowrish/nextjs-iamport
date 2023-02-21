# Next.js for Iamport

![repository-open-graph-template](https://user-images.githubusercontent.com/71705386/116129715-610f4d80-a705-11eb-86ca-07ef49575c8e.png)

## 소개

Next.js + TypeScript + Iamport 를 사용하는 Boilerplate 입니다. 오픈소스로 개발된 Iamport Client를 사용하지 않고, Iamport에서 제공하는 js를 사용하는 간단한 방법을 제시합니다.

## 참조

- [아임포트](https://www.iamport.kr/)
- [Iamport Typings](https://github.com/junhoyeo/iamport-typings) by [Junho Yeo](https://github.com/junhoyeo)
- [Next.js](https://nextjs.org/)

## 설치

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fcrowrish%2Fnextjs-iamport)

1. repository를 clone합니다.

```bash
git clone https://github.com/crowrish/nextjs-iamport.git
cd nextjs-iamport
```

2. NPM package를 설치합니다.

```bash
npm install && npm run dev
# or
yarn && yarn dev
```

3. http://localhost:3000 으로 접속하여 확인합니다.

## 사용방법

1. 최상위 루트에 있는 `.env` 파일의 환경 변수에 자신의 `IMP_UID`를 설정해주세요.

```javascript
IMP_UID=imp99999999
NEXT_PUBLIC_IMP_UID=imp99999999
```

2. 결제를 위한 최소한의 정보값을 입력해줍니다.

![화면 캡처 2021-04-27 074731](https://user-images.githubusercontent.com/71705386/116160354-d8a4a300-a72c-11eb-9af0-469b139ba53a.png)

3. 개발자 모드 콘솔 또는 화면 아래에 응답이 표시됩니다. `response`에 대한 자세한 내용은 [여기](https://portone.gitbook.io/docs/sdk/javascript-sdk/payrt)를 참조하세요.
