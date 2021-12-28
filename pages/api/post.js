// import ipfs  from "../contracts/ipfs"
// import contract from "../contracts/feedsContract"
// import { getAccount } from "./account"
// // import { useContractCall, useContractFunction } from "@usedapp/core"
// // import { ethers } from "ethers";
// // import { Contract } from "@ethersproject/contracts";

// // import { usePost } from "../hooks";

// // const contractInterface = new ethers.utils.Interface(abi);
// // const contract = new Contract(address, contractInterface);

// let account = ''
// let fileType = ''
// let caption = ''
// let buffer = "";
// let loading = false;

// // function Post() {
// //     const send = usePost('0xsegdae', '0xksjer', '0xseggh');
// //    console.log(send)
// //     return (<div color="white" fontSize="8xl">
// //     {send.toString()}
// //   </div>)
// //   }

// // const [postHash, setPostHash] = useContractCall (
// //     {
// //         abi: abi, // ABI interface of the called contract
// //         address: address, // On-chain address of the deployed contract 
// //         method: "sendHash", // Method to be called 
// //         args: [imgHash, textHash, typeHash], // Method arguments - address to be checked for balance 
// //       }
// //   )??0;



// // function useSendHash (imgHash, textHash, typeHash) {
// //       const [transactionHash] = 
// //         useContractCall ( imgHash && textHash && typeHash &&
// //           {
// //               abi: contractInterface, // ABI interface of the called contract
// //               address: address, // On-chain address of the deployed contract 
// //               method: "sendHash", // Method to be called 
// //               args: [imgHash, textHash, typeHash], // Method arguments - address to be checked for balance 
// //             }
// //         ) ?? [ ];
// //       console.log(transactionHash);

// //      return transactionHash;
// //     }


// export const captureFile = (file) => {
//     const reader = new FileReader();
//     console.log(file);
//     if (typeof file !== "undefined") {
//       captureFileType(file.type);
//       reader.readAsArrayBuffer(file);
//       reader.onloadend = async () => {
//         buffer = await convertToBuffer(reader.result);
//       };
//     } else buffer = "";
//   };

//   const convertToBuffer = async (reader) => {
//     return Buffer.from(reader);
//   };


// export const captureFileType = (_fileType) => {
//     fileType = _fileType;
//   };
  
// export const captureCaption = (_caption) => {
//     caption = _caption;
//   };
  
//   /**
//    * converts ArrayBuffer to
//    * Buffer for IPFS upload.
//    */

  
//   /**
//    * submits buffered image & text to IPFS
//    * and retrieves the hashes, then store
//    * it in the Contract via sendHash().
//    */
//  export const onSubmit = async () => {
//     alert("Uploading on IPFS...");
//     loading = true;
//     let imgHash;
    
//     await ipfs.add(buffer).then((hashedImg) => {
//       imgHash = hashedImg[0].hash;
//       console.log(imgHash);
//     });
  
//     let bufferDesc = await convertToBuffer(caption);
//     let hashedText = await ipfs.add(bufferDesc);
//     let textHash = hashedText[0].hash;
  
//     console.log(`fileType: ${fileType}`);
//     let bufferType = await convertToBuffer(fileType);
//     console.log(`bufferType: ${bufferType}`);
//     let hashedType = await ipfs.add(bufferType);
//     let typeHash = hashedType[0].hash;
//     console.log(`typeHash: ${typeHash}`);
  
//     console.log(typeof typeHash);

//     console.log("totalSupply: ", totalSupply)
//     // await contract.methods
//     // .sendHash(imgHash, textHash, typeHash)
//     // .send({ from: "0xB2125ceB65Da27B86f65522A0fAa7990f5d6a24C" })
//     // .on('transactionHash', function(hash){
//     //     console.log(hash)
//     // })
    
    
    
//     // , (error, transactionHash) => {
//     //     console.log(error)
//     //   console.log(`transactionHash: ${transactionHash}`);
//     //   if (typeof transactionHash !== "undefined") {
//     //     alert("Storing on Ethereum...");
//     //     contract.once("NewPost", { from: "0xB2125ceB65Da27B86f65522A0fAa7990f5d6a24C" }, () => {
//     //       getPosts();
//     //       alert("Operation Finished! Refetching...");
//     //     });
//     //   }
//     //   loading = false;
//     // });
//     // const { state, send } = useIncrement();


// //  const cnt = useCount();
//  console.log(cnt)
//     // const { state, send } = sendHash(imgHash, textHash, typeHash);

//   };
  
//   /**
//    * validates if image & captions
//    * are filled before submission.
//    */
// export  const handleOk = () => {
//     //   console.log(_file)
//     //   let _buffer = captureFile(_file);
//     //   console.log(!_buffer)
//     if (!buffer || !caption) {
//       alert("Please fill in the information.");
//     } else {
//       onSubmit();
//     }
//   };

  
// // export default async function handler(req, res) {
// //     const posts = await getPosts();
// //     res.status(200).json({ data: posts });
// // }
