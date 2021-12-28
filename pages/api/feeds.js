// // Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import contract from "../contracts/feedsContract"
// import getAccount from "./account"



// const getPosts = async () => {

//   let account = await fetch('http://localhost:3000/api/account');
//   account = "0xB2125ceB65Da27B86f65522A0fAa7990f5d6a24C"//await account.json()
//   console.log(account);

//   const posts = [];
//   const counter = await contract.methods.getCounter().call({
//     from: account,
//   });

//   console.log(counter);

//   if (counter !== null) {
//     const hashes = [];
//     const captions = [];
//     const types = [];
//     for (let i = counter; i >= 1; i -= 1) {
//       hashes.push(
//         contract.methods.getHash(i).call({
//           from: account,
//         })
//       );
//     }

//     const postHashes = await Promise.all(hashes);

//     for (let i = 0; i < postHashes.length; i += 1) {
//       console.log(postHashes[i].text)
//       captions.push(
//         fetch(`https://cloudflare-ipfs.com/ipfs/${postHashes[i].text}`).then((res) =>
//           res.text()
//         )
//       );
//     }

//     for (let i = 0; i < postHashes.length; i += 1) {
//       types.push(
//         fetch(`https://cloudflare-ipfs.com/ipfs/${postHashes[i].fileType}`).then((res) =>
//           res.text()
//         )
//       );
//     }

//     const postCaptions = await Promise.all(captions);
//     const postFileType = await Promise.all(types);

//     for (let i = 0; i < postHashes.length; i += 1) {
//       posts.push({
//         id: i,
//         key: `key${i}`,
//         caption: postCaptions[i],
//         fileType: postFileType[i],
//         src: `https://cloudflare-ipfs.com/ipfs/${postHashes[i].img}`,
//       });
//     }

//     //   this.currentPosts = posts;
//   }
//   // console.log(posts)
//   return posts;
// };

// export default async function handler(req, res) {
//   const posts = await getPosts();
//   res.status(200).json({ data: posts });
// }
