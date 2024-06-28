import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <GoogleTagManager gtmId="G-R17NJV1L4N" />
        <GoogleAnalytics gaId="G-R17NJV1L4N" />
        <NextScript />
      </body>
    </Html>
  );
}
