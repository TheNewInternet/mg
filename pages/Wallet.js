import Head from "next/head";
import Profile from "./walletpage/Profile";

import { UseWalletProvider } from "use-wallet";

const Wallet = () => {
  return (
    <div>
      <Head>
        <title>Wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UseWalletProvider>
        <Profile />
      </UseWalletProvider>
    </div>
  );
};

export default Wallet;
