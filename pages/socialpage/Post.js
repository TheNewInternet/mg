// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import ipfs from "../contracts/ipfs";
import {
  StyledPostForm,
  StyledFormBtn,
  CloseBtn,
  SubmitBtn,
  PostLabel,
  MotionFolder,
  StyledFolder,
  Folder,
  ImgInput,
  PreviewFile,
  PreviewVideo,
  PreviewImg,
  PreviewDltBtn,
  PostText,
  PostTextArea,
  MotionPlus,
  StyledPlusIcon,
} from "./PostStyles";

<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, {useState, useEffect} from 'react';
import Web3 from "web3";
>>>>>>> b8557969d22c33efb6cf735b19444131d630816c

import { c_abi, c_address } from "../contracts/feedsContract";

let abi = c_abi; // Paste your ABI here
let contractAddress = c_address;

<<<<<<< HEAD
let Web3 = require("web3");
=======
>>>>>>> b8557969d22c33efb6cf735b19444131d630816c

const convertToBuffer = async (reader) => {
  return Buffer.from(reader);
};

// const captureFile = async (file) => {
//   const reader = new FileReader();
//   console.log(file);
//   let buffer;
//   if (typeof file !== "undefined") {
//     // captureFileType(file.type);
//     reader.readAsArrayBuffer(file);
//     reader.onloadend = async () => {
//       buffer = await convertToBuffer(reader.result);
//     };
//   } else buffer = "";

//   return buffer
// };

const Submit = async (file, caption, fileType) => {
  let buffer = await convertToBuffer(file); //captureFile(file)
  alert("Uploading on IPFS...");
  // loading = true;
  let imgHash;

  let hashedImg = await ipfs.add(buffer);

  imgHash = hashedImg[0].hash;
  console.log("imgHash: ", imgHash);

  let bufferDesc = await convertToBuffer(caption);
  let hashedText = await ipfs.add(bufferDesc);
  let textHash = hashedText[0].hash;

  console.log(`fileType: ${fileType}`);
  let bufferType = await convertToBuffer(fileType);
  console.log(`bufferType: ${bufferType}`);
  let hashedType = await ipfs.add(bufferType);
  let typeHash = hashedType[0].hash;
  console.log(`typeHash: ${typeHash}`);

  console.log(typeof typeHash);

  return { imgHash, textHash, typeHash };
  // console.log(cnt)

  // console.log("totalSupply: ", totalSupply)
  // await contract.methods
  // .sendHash(imgHash, textHash, typeHash)
  // .send({ from: "0xB2125ceB65Da27B86f65522A0fAa7990f5d6a24C" })
  // .on('transactionHash', function(hash){
  //     console.log(hash)
  // })

  // , (error, transactionHash) => {
  //     console.log(error)
  //   console.log(`transactionHash: ${transactionHash}`);
  //   if (typeof transactionHash !== "undefined") {
  //     alert("Storing on Ethereum...");
  //     contract.once("NewPost", { from: "0xB2125ceB65Da27B86f65522A0fAa7990f5d6a24C" }, () => {
  //       getPosts();
  //       alert("Operation Finished! Refetching...");
  //     });
  //   }
  //   loading = false;
  // });
  // const { state, send } = useIncrement();

  //  const cnt = useCount();
  // const { state, send } = sendHash(imgHash, textHash, typeHash);
};

function mint(address, contract, imgHash, textHash, typeHash) {
  console.log(imgHash, textHash, typeHash);
  let encoded = contract.methods
    .sendHash(imgHash, textHash, typeHash)
    .encodeABI();

  let tx = {
<<<<<<< HEAD
    from: address,
    to: contractAddress,
    data: encoded,
  };

  let txHash = ethereum
    .request({
      method: "eth_sendTransaction",
=======
      from: address,
      to : contractAddress,
      data : encoded,
  }

  let txHash =global.window.ethereum.request({
      method: 'eth_sendTransaction',
>>>>>>> b8557969d22c33efb6cf735b19444131d630816c
      params: [tx],
    })
    .then((hash) => {
      alert("You can now view your transaction with hash: " + hash);
    })
    .catch((err) => console.log(err));

  return txHash;
}

const Post = () => {
  const [caption, setCaption] = useState("");
  const [file, setFile] = useState(undefined);
  const [fileType, setFileType] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);

  const [web3, setWeb3] = useState(null);
  const [address, setAddress] = useState(null);
  const [contract, setContract] = useState(null);
  const [totalSupply, setTotalSupply] = useState(0);

  // let abi = c_abi // Paste your ABI here
  // let contractAddress = c_address

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
        let w3 = new Web3(window.ethereum)
        setWeb3(w3)
      
        let c = new w3.eth.Contract(abi, contractAddress)
        setContract(c)
      
        c.methods.getCounter().call().then((_supply) => {
          // Optionally set it to the state to render it using React
          setTotalSupply(_supply)
        }).catch((err) => console.log(err))
      }).catch((err) => console.log(err))
    : console.log("Please install MetaMask")
    
    
  }, [])
>>>>>>> b8557969d22c33efb6cf735b19444131d630816c

  function captionChange(e) {
    setCaption(e.target.value);
    console.log(caption);
    //   captureCaption(caption);
  }

  function fileChange(e) {
    //   captureFile(e.target.files[0]);

    if (e.target.files && e.target.files[0]) {
      // setFile(e.target.files[0]);
      setFileType(e.target.files[0].type);
      let reader = new FileReader();

      reader.onload = function (e) {
        setFile(e.target.result);
        setIsUploaded(true);
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // handleOk();
    const { imgHash, textHash, typeHash } = await Submit(
      file,
      caption,
      fileType
    );

    mint(address, contract, imgHash, textHash, typeHash);
  }

  const [isOnClick, setIsOnClick] = useState(false);
  function Click() {
    setIsOnClick(true);
  }

  function BackToIcon() {
    setIsOnClick(false);
  }

  return (
    <div>
      {isOnClick ? (
        <StyledPostForm
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
        >
          <StyledFormBtn>
            <CloseBtn
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              value="Close"
              onClick={BackToIcon}
            />
            <SubmitBtn
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              value="Submit"
            />
          </StyledFormBtn>

          <PostLabel>
            <MotionFolder>
              {!isUploaded ? (
                <StyledFolder
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ImgInput
                    type="file"
                    id="upload-input"
                    accept=".jpg,.jpeg,.gif,.png,.mp4"
                    onChange={fileChange}
                  />
                  <Folder htmlFor="upload-input">
                    <FontAwesomeIcon icon={faCamera} />
                    choose one photo
                  </Folder>
                </StyledFolder>
              ) : (
                <PreviewFile>
                  {fileType.includes("video") ? (
                    <PreviewVideo
                      src={file}
                      draggable={false}
                      controls
                      autoPlay
                      alt="uploaded-img"
                    />
                  ) : (
                    <PreviewImg
                      id="uploaded-image"
                      src={file}
                      draggable={false}
                      alt="uploaded-img"
                    />
                  )}
                  <PreviewDltBtn
                    onClick={() => {
                      setIsUploaded(false);
                      setFile(null);
                    }}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </PreviewDltBtn>
                </PreviewFile>
              )}
            </MotionFolder>
          </PostLabel>
          <PostText>
            <PostTextArea
              id="caption"
              name="caption"
              onChange={captionChange}
              placeholder="Say something about your cool stuff"
            />
          </PostText>
        </StyledPostForm>
      ) : (
        <MotionPlus
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <StyledPlusIcon
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={Click}
          >
            <FontAwesomeIcon icon={faPlus} />
          </StyledPlusIcon>
        </MotionPlus>
      )}
    </div>
  );
};

export default Post;
