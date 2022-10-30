import "../../styles/globals.css";
import Head from "next/head";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Next and MDX Blog</title>
      </Head>
      <div className="container">
        <Nav />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
