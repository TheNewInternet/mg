import Link from "next/link";
import {
  Nav,
  StyledLogo,
  Logo,
  StyledSidebar,
  SidebarWallet,
  StyledBars,
  StyledMenu,
  MeunItem,
  StyledWallet,
} from "./NavbarStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ toggle }) => {
  return (
    <Nav>
      <StyledLogo whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
        <Link href="/" passHref>
          <Logo>Metagram</Logo>
        </Link>
      </StyledLogo>
      <StyledSidebar>
        <Link href="/Wallet" passHref>
          <SidebarWallet whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            wallet
          </SidebarWallet>
        </Link>
        <StyledBars whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <FontAwesomeIcon icon={faBars} onClick={toggle} />
        </StyledBars>
      </StyledSidebar>
      <StyledMenu>
        <Link href="/Feeds" passHref>
          <MeunItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            FEEDS
          </MeunItem>
        </Link>
        <Link href="/NFT" passHref>
          <MeunItem whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            NFT
          </MeunItem>
        </Link>
        <Link href="/Wallet" passHref>
          <StyledWallet whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            wallet
          </StyledWallet>
        </Link>
      </StyledMenu>
    </Nav>
  );
};

export default Navbar;
