import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { StateProvider } from "../context/stateContext";
import { HashconnectProvider } from "../context/hashConnectContext";
import { ParallaxProvider } from "react-scroll-parallax";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HashconnectProvider network="mainnet">
      <StateProvider>
        <ParallaxProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ParallaxProvider>
      </StateProvider>
    </HashconnectProvider>
  );
}
