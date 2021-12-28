import web3 from "./web3";

// var Contract = require('web3-eth-contract');
// Contract.setProvider('https://rpc-mumbai.maticvigil.com');

export const c_address = "0x51345F532AB70E432316162591BdDb52b7527168";
export const c_abi = [
  {
    anonymous: false,
    inputs: [],
    name: "NewPost",
    type: "event",
  },
  {
    inputs: [],
    name: "getCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getHash",
    outputs: [
      {
        internalType: "string",
        name: "img",
        type: "string",
      },
      {
        internalType: "string",
        name: "text",
        type: "string",
      },
      {
        internalType: "string",
        name: "fileType",
        type: "string",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_img",
        type: "string",
      },
      {
        internalType: "string",
        name: "_text",
        type: "string",
      },
      {
        internalType: "string",
        name: "_type",
        type: "string",
      },
    ],
    name: "sendHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

// var contract = new web3.eth.Contract(abi, address);

// export default contract;
