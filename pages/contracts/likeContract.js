import web3 from "./web3";

// var Contract = require('web3-eth-contract');
// Contract.setProvider('https://rpc-mumbai.maticvigil.com');

export const like_address = "0x4a5779817Db50e12d7E7A055dC8F6fD4E3914e48";
export const like_abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_postIndex",
        type: "uint256",
      },
    ],
    name: "dislike",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_postIndex",
        type: "uint256",
      },
    ],
    name: "getLike",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_postIndex",
        type: "uint256",
      },
    ],
    name: "searchLikeAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

// var contract = new web3.eth.Contract(abi, address);

// export default contract;
