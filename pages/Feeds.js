import Head from "next/head";
import Feed from "./socialpage/Feed";
import Post from "./socialpage/Post";

<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, {useState, useEffect} from 'react';

import { c_abi, c_address } from "./contracts/feedsContract"
import Web3 from "web3";
>>>>>>> b8557969d22c33efb6cf735b19444131d630816c

import { c_abi, c_address } from "./contracts/feedsContract";
let Web3 = require("web3");

import { StyledSocial } from "./SocialStyles";

const Social = () => {
  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [totalSupply, setTotalSupply] = useState(0);

  let abi = c_abi; // Paste your ABI here
  let contractAddress = c_address;

  useEffect(() => {
<<<<<<< HEAD
    window.ethereum
      ? ethereum
          .request({ method: "eth_requestAccounts" })
          .then((accounts) => {
            setAddress(accounts[0]);
            let w3 = new Web3(ethereum);
            setWeb3(w3);

            let c = new w3.eth.Contract(abi, contractAddress);
            setContract(c);

            c.methods
              .getCounter()
              .call()
              .then((_supply) => {
                // Optionally set it to the state to render it using React
                setTotalSupply(_supply);
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err))
      : console.log("Please install MetaMask");
  }, []);
=======
    global.window.ethereum ?
    global.window.ethereum.request({ method: "eth_requestAccounts" }).then((accounts) => {
        setAddress(accounts[0])
        let w3 = new Web3(global.window.ethereum)
        setWeb3(w3)
>>>>>>> b8557969d22c33efb6cf735b19444131d630816c

  // function mint(){
  //   let _price = web3.utils.toWei("200000000", "Gwei");
  //   let encoded = contract.methods.sendHash("0x00","0x01","0x02").encodeABI()

  //   let tx = {
  //       from: address,
  //       to : contractAddress,
  //       data : encoded,
  //   }

  //   let txHash = ethereum.request({
  //       method: 'eth_sendTransaction',
  //       params: [tx],
  //   }).then((hash) => {
  //       alert("You can now view your transaction with hash: " + hash)
  //   }).catch((err) => console.log(err))

  //   return txHash
  // }

  return (
    <StyledSocial>
      <Head>
        <title>Feeds</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Post />
      <Feed address={address} />
    </StyledSocial>
  );
};

export default Social;
