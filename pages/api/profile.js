import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";

function getRpcUrl() {
  const isTestnet = process.env.IS_TEST_NET || true;
  if (!process.env.NEXT_PUBLIC_RPC_URL) {
    if (true) {
      return "https://rpc-mumbai.maticvigil.com";
    } else {
      return "https://polygon-rpc.com";
    }
  }
  return process.env.NEXT_PUBLIC_RPC_URL;
}

const sdk = new ThirdwebSDK(
  new ethers.Wallet(
    process.env.PRIVATE_KEY,
    ethers.getDefaultProvider(getRpcUrl())
  )
);

// Initialize market module by passing in contract address
// const market = sdk.getMarketModule("0x6D538e962DD6628F220976eB2771A5aACeDBDed7");

// Declaring the nft smart contract address
const nftSmartContractAddress = "0x0aeecA14c410A629637E02998E754aB00BC9a938"


const nft = sdk.getNFTModule(nftSmartContractAddress);

export default async function handler(req, res) {

    const data = await nft.getAll()//market.getAll();
    res.status(200).json(data);
  }
  
