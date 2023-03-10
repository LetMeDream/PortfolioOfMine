// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&family=Roboto+Mono:wght@400;700&family=Roboto:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>      
        <link rel="icon" type="image/x-icon" href="images/favicon.ico" /> 
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
