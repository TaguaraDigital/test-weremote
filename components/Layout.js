// components/layout.js

import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

export default function Layout({ title, description, children }) {
  return (
    <div className="content">
      <Head>
        <title> {title ? `${title} - Test WeRemote` : `Test WeRemote`}</title>
        {description && <meta name="description" content={description} />}
        <link rel="icon" href="/td.ico" />
      </Head>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
