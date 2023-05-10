import { ReactElement, useEffect, useState, useContext } from "react";
import Head from "next/head";
import Navigation from "./navigation";
import Footer from "./footer";
import Settings from "./settings";
import WalletModal from "./walletModal";

interface layout {
  children: ReactElement;
}

export default function Layout({ children }: layout) {
  useEffect(() => {
    document.documentElement.lang = "en-us";
  }, []);

  return (
    <div className="flex flex-col font-roboto-cond relative w-full bg-white dark:bg-leemon-purple-dark3 ">
      <Head>
        <title>Leemon Swap</title>
        <meta name="description" content="Leemon Swap description" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col w-full h-full">
        <Navigation />
        {/* SEPARATOR */}
        <div className="h-14" />
        {children}
        <Settings />
        <WalletModal />
      </main>
      <Footer />
    </div>
  );
}
