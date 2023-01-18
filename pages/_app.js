import Layout from "../components/layout/Layout";
import { Analytics } from "@vercel/analytics/react";
import "../styles/normalise.scss";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}

export default MyApp;
