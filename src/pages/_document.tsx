/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html>
      <Head>
        {/*  <link rel="stylesheet" href="/scss/main.css" />*/}

        <link rel="shortcut icon" href="/images/logo1.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="/plugins/fontawesome.6.1.1/css/all.css" />
        <link rel="shortcut icon" href="/images/logo1.jpg" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap"
          rel="stylesheet"
        />
        {/* <link href="/plugins/boxicons-2.1.2/css/boxicons.css" />
        <script src="/plugins/lordicon/xdjxvujz.js" />
        <script src="/plugins/jquery.3.6.0/query-3.6.0.min.js"></script> */}
      </Head>
      <body className="bodyWebUser">
        <Main />
        <NextScript />
      </body>
      {/* <script src="/js/slider.js"></script>
      <script src="/js/main.js"></script>
      <script src="/js/animation.min.js"></script>
      <script src="/js/menu.min.js"></script> */}
      <script src="https://unpkg.com/boxicons@2.0.9/dist/boxicons.js"></script>
    </Html>
  );
}
