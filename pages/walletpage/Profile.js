import { useWallet } from "use-wallet";
import {
  StyledProfile,
  User,
  UserAddress,
  UserBalance,
  Balance,
  DisconnectBtn,
  ConnectBtn,
} from "./ProfileStyles";

const Profile = () => {
  const wallet = useWallet();
  const balance =( wallet.balance) / 1000000000000000000 ;

  return (
    <StyledProfile>
      {wallet.status === "connected" ? (
        <User>
          <UserAddress>{wallet.account}</UserAddress>
          <UserBalance><Balance>{balance}</Balance>MATIC</UserBalance>
          <DisconnectBtn onClick={() => wallet.reset()}>
            disconnect
          </DisconnectBtn>
        </User>
      ) : (
        <User>
          <UserAddress>ADDRESS</UserAddress>
          <UserBalance>BALANCE</UserBalance>
          <ConnectBtn onClick={() => wallet.connect()}>connect</ConnectBtn>
        </User>
      )}
    </StyledProfile>
  );
};
export default Profile;
