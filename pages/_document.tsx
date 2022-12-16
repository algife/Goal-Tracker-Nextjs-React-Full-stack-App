import Document, { Head, Html, Main, NextScript } from "next/document";

// --------------------

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* GLOBAL HEAD CODE */}
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/logo192.png" />

          {/* <!--
            manifest.json provides metadata used when your web app is installed on a
            user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
          --> */}
          <link rel="manifest" href="/manifest.json" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&family=Merienda:wght@700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="goals-tracker-app">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// --------------------------

export default CustomDocument;
