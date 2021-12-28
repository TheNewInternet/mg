// import web3 from "../contracts/web3";
// // import { useEthers } from '@usedapp/core'
// // import { formatUnits } from '@ethersproject/units'

// // const DAI = '0x6b175474e89094c44da98b954eedeac495271d0f'

// // export function TokenBalance( ) {
// //     const { account } = useEthers( )
// //     const tokenBalance = useTokenBalance(DAI, account)
                  
// // return (
// //       <div>
// //          {tokenBalance && <p>Balance: {formatUnits(tokenBalance, 18)}</p>}
// //       </div>
// //     )


// const getAccount = async () => {
//     const _accounts = await web3.eth.getAccounts();
//     const _address = _accounts[0];
//     console.log(_address)
//     return _address;
//   };

// export default async function handler(req, res) {
//     const account = await getAccount();
//     console.log(account)
//     res.status(200).json({ data: account });
// }
