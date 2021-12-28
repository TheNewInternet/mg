import Blog from "./Blog";
import { StyledFeed } from "./FeedStyles";
// import { getPosts } from "../../api";

import React, { useState, useEffect } from "react";

import { c_abi, c_address } from "../contracts/feedsContract";
import { like_abi, like_address } from "../contracts/likeContract";
import { getHashes } from "crypto";
import { mint_abi, mint_address } from "../contracts/mintContract";
import add from "ipfs-http-client/src/files-regular/add";
import minify from "babel-plugin-styled-components/lib/visitors/minify";

let abi = c_abi; // Paste your ABI here
let contractAddress = c_address;

let Web3 = require("web3");

let account;

// let posts = [
//   // {
//   //   src: "https://cloudflare-ipfs.com/ipfs/QmRFZbxe2jiqGYrL1dXGoT2b9gd4csybxSUAKY6mnSTCDc",
//   //   caption: "psytrance pig 🐷  ",
//   //   fileType: "image/png",
//   // },
//   // {
//   //   src: "https://cloudflare-ipfs.com/ipfs/QmPmpRDD9iaChuFwnbbABLHzpYpA7nASfMJWaJD2t7wtfB",
//   //   caption:
//   //     "RedmonkeyRedmonkey Redmonkey Redmonkey Redmonkey Redmonkey Redmonkey Redmonkey Redmonkey Redmonkey Redmonkey Redmonkey Redmonkey Redmonkey Redmonkey Redmonkey Redmonkey Redmonkey Redmonkey Redmonkey Redmonkey   ",
//   //   fileType: "image/png",
//   // },
//   // {
//   //   src: "https://cloudflare-ipfs.com/ipfs/QmYB9496Yc7tNFVshi3Bcf1MN1tWcNSVw6gYpCeL71u4YV",
//   //   caption: "stay  ",
//   //   fileType: "video/mp4",
//   // },
// ];

// const getList = async () => {
//   posts = await getPosts();
// };
// getList();

// function getPostHashById(id){
//   let postHash = ''
//  global.window.ethereum ?
//     ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
//       setAddress(accounts[0])
//       let w3 = new Web3(ethereum)
//       setWeb3(w3)

//       let c = new w3.eth.Contract(abi, contractAddress)
//       setContract(c)

//       c.methods.getCounter().call().then((id) => {
//         // Optionally set it to the state to render it using React
//         getHash(id)
//       }).catch((err) => console.log(err))
//     }).catch((err) => console.log(err))
//   : console.log("Please install MetaMask")

//   return postHash
// }

// async function getPosts(counter){
//   const hashs = []
//   for (let i = counter; i >= 1; i -= 1) {
//     hashs.push(
//       getPostHashById(i)
//     );
// //   }

//   const postHashs = await Promise.all(hashs);

//   const captions = []
//   const types = []

//   for (let i = 0; i < postHashs.length; i += 1) {
//     captions.push(
//       fetch(`https://cloudflare-ipfs.com/ipfs/${postHashs[i].text}`).then((res) =>
//         res.text()
//       )
//     );
//   }

//   for (let i = 0; i < postHashs.length; i += 1) {
//     types.push(
//       fetch(`https://cloudflare-ipfs.com/ipfs/${postHashs[i].fileType}`).then((res) =>
//         res.text()
//       )
//     );
//   }

//   const postCaptions = await Promise.all(captions);
//   const postFileType = await Promise.all(types);

//   const posts = []
//   for (let i = 0; i < postHashs.length; i += 1) {
//     posts.push({
//       id: i,
//       key: `key${i}`,
//       caption: postCaptions[i],
//       fileType: postFileType[i],
//       src: `https://cloudflare-ipfs.com/ipfs/${postHashs[i].img}`,
//     });
//   }

//  return posts;

// }

const Feed = (address) => {
  const [web3, setWeb3] = useState(null);
  // const [address, setAddress] = useState(null)
  const [contract, setContract] = useState(null);
  // const [counter, setCounter] = useState(0)
  const [posts, setPosts] = useState([]);

  // let abi = c_abi // Paste your ABI here
  // let contractAddress = c_address

  // useEffect(() => {
  //  global.window.ethereum ?
  //     ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
  //       setAddress(accounts[0])
  //       let w3 = new Web3(ethereum)
  //       setWeb3(w3)

  //       let c = new w3.eth.Contract(abi, contractAddress)
  //       setContract(c)

  //       c.methods.getCounter().call().then((_counter) => {
  //         // Optionally set it to the state to render it using React
  //         setCounter(_counter)
  //       }).catch((err) => console.log(err))
  //     }).catch((err) => console.log(err))
  //   : console.log("Please install MetaMask")
  // })

  useEffect(async () => {
    window.ethereum
      ? ethereum
          .request({ method: "eth_requestAccounts" })
          .then(async (accounts) => {
            account = accounts[0];

            let ps = await getPosts(account);
            console.log("ps", ps);
            setPosts(ps);
          })
          .catch((err) => console.log(err))
      : console.log("Please install MetaMask");
  }, []);

  const getLIkeAmount = async (account, _index) => {
    let w3 = new Web3(ethereum);
    let like_contract = new w3.eth.Contract(like_abi, like_address);
    return await like_contract.methods
      .searchLikeAmount(_index)
      .call({ from: account });
  };

  const getMintAmount = async (account, _index) => {
    let w3 = new Web3(ethereum);
    let mint_contract = new w3.eth.Contract(mint_abi, mint_address);
    return await mint_contract.methods.getMint(_index).call({ from: account });
  };

  const getPosts = async (address) => {
    // loading = false;
    let w3 = new Web3(ethereum);
    let contract = new w3.eth.Contract(abi, contractAddress);

    const posts = [];
    const counter = await contract.methods.getCounter().call({
      from: address,
    });

    console.log("counter", counter);

    if (counter !== null) {
      const hashes = [];
      const captions = [];
      const types = [];
      for (let i = 1; i <= counter; i += 1) {
        hashes.push(
          contract.methods.getHash(i).call({
            from: address,
          })
        );
      }

      const postHashes = await Promise.all(hashes);

      for (let i = 0; i < postHashes.length; i += 1) {
        captions.push(
          fetch(`https://cloudflare-ipfs.com/ipfs/${postHashes[i].text}`).then((res) =>
            res.text()
          )
        );
      }

      for (let i = 0; i < postHashes.length; i += 1) {
        types.push(
          fetch(`https://cloudflare-ipfs.com/ipfs/${postHashes[i].fileType}`).then((res) =>
            res.text()
          )
        );
      }

      const postCaptions = await Promise.all(captions);
      const postFileType = await Promise.all(types);

      for (let i = 0; i < postHashes.length; i += 1) {
        const likeInfo = await getLIkeAmount(address, i);
        const mintInfo = await getMintAmount(address, i);
        console.log(mintInfo);
        const res = await fetch(`https://ipfs.io/ipfs/${postHashes[i].img}`);
        const b64img = await res.text();
        console.log(b64img);
        posts.push({
          id: i,
          key: `key${i}`,
          caption: postCaptions[i],
          fileType: postFileType[i],
          src: `${b64img}`,
          likeCtr: likeInfo[0],
          state: likeInfo[1],
          mintCount: mintInfo[0],
          mintState: mintInfo[1],
        });
      }

      //   this.currentPosts = posts;
      // loading = false;
    }
    // console.log(posts)
    return posts;
  };

  return posts
    .slice(0)
    .reverse()
    .map((post) => {
      const {
        id,
        src,
        caption,
        fileType,
        likeCtr,
        state,
        mintCount,
        mintState,
      } = post;
      return (
        <StyledFeed
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Blog
            id={id}
            src={src}
            caption={caption}
            fileType={fileType}
            likeCtr={likeCtr}
            state={state}
            mintCount={mintCount}
            mintState={mintState}
          />
        </StyledFeed>
      );
    });
};

export default Feed;
