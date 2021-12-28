import web3 from "./web3";

// var Contract = require('web3-eth-contract');
// Contract.setProvider('https://rpc-mumbai.maticvigil.com');

export const mint_address = "0x2e21f40c1376f8C125BE0060758b16e874616664";
export const mint_abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintIndex",
        type: "uint256",
      },
    ],
    name: "getMint",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_mintIndex",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_likeCount",
        type: "uint256",
      },
    ],
    name: "mint",
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
];

// export function mintClick(_index, _likeCtr, account){

// 	let w3 = new web3(ethereum);
// 	let mint_contract = new w3.eth.Contract(mint_abi, mint_address)

// 	let encoded = mint_contract.methods.mint(_index, _likeCtr).encodeABI()

// 	let tx = {
// 		from: account,
// 		to : mint_address,
// 		data : encoded,
// 		nonce: "0x00",
// 	}

// 	let txHash = ethereum.request({
// 		method: 'eth_sendTransaction',
// 		params: [tx],
// 	}).then((hash) => {
// 		alert("You can now view your transaction with hash: " + hash)
// 	}).catch((err) => console.log(err))

// 	return txHash
// }
