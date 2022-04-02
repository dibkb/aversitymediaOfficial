import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "../src/components/Layout";
import "./styles.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>AVERSITY Media</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
