import { ThirdwebSDK } from "@3rdweb/sdk";
import { ethers } from "ethers";
import { NextApiRequest, NextApiResponse } from "next";
// import { ThirdwebSDK } from "@3rdweb/sdk";
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

// function getRandomInt(min: number, max: number) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   //The maximum is inclusive and the minimum is inclusive
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function sample<T>(arr: Array<T>): T {
//   return arr[Math.floor(Math.random() * arr.length)];
// }

// function generateMetadataForType(account: string, type: string) {
//   const rand = getRandomInt(0, 100);
//   let image = "ipfs://QmQxDXn39Sgou8exRJZiwUaqCMWw8WyDKSScp6kvjeytGC";
//   let rarity = "common";
//   if (rand < 5) {
//     image = "ipfs://QmWmNVCpmav9bDTVLBQw8sPDkxkM1Hx7unLtpeAtYA6Pgc";
//     rarity = "legendary";
//   } else if (rand < 35) {
//     image = "ipfs://QmcmfEV7X5LPfrAjUubw3wGV4toY9Mkb74XVhQJeKakp4Z";
//     rarity = "rare";
//   }

//   return {
//     name: `${type} sword - ${rarity}`,
//     description: `The special ${type} sword crafted for ${account}`,
//     image: image,
//     properties: {
//       type: type,
//       rarity: rarity,
//       element: sample(["fire", "water", "earth", "lightning", "wind"]),
//       attack: getRandomInt(10, 30),
//     },
//   };
// }

// Initialize market module by passing in contract address

export default (req: NextApiRequest, res: NextApiResponse): Promise<any> => {
  const sdk = new ThirdwebSDK(
    new ethers.Wallet(
      process.env.PRIVATE_KEY as string,
      ethers.getDefaultProvider(getRpcUrl())
    )
  );

  

  const nft = sdk.getNFTModule(
    "0x0aeecA14c410A629637E02998E754aB00BC9a938"
  );

  return new Promise<void>((resolve) => {
    const { account, caption, image } = req.body;
    console.log(account, caption, image)
    // TODO: validations
    // const image = "https://cloudflare-ipfs.com/ipfs/QmRFZbxe2jiqGYrL1dXGoT2b9gd4csybxSUAKY6mnSTCDc"
    const j = 
                {
                name: `A metagram NFT owned by ${account}.`,
                description: `${caption}`,
                image: image,
                    //     properties: {
                    //     type: type,
                    //     rarity: rarity,
                    //     element: sample(["fire", "water", "earth", "lightning", "wind"]),
                    //     attack: getRandomInt(10, 30),
                    // },
            }
    // async/await works too!
    nft
      .mintTo(account, j)
      .then((metadata) => {
        res.status(200).json(metadata);
        resolve();
      });
  });
};
