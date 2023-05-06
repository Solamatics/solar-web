import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <!--=============== REMIX ICONS ===============--> */}
          <link
            href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
            rel="stylesheet"
          />
        </Head>
        {/* <body className="dark-theme"> */}
        <body className="">
          <Main />
          <NextScript />

          {/* <!--=============== SCROLL UP ===============--> */}
          <a href="#" className="scrollup" id="scroll-up">
            <i className="ri-arrow-up-fill scrollup__icon"></i>
          </a>
        </body>
      </Html>
    );
  }
}
