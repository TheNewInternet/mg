import Link from "next/link";
import Image from "next/image";
import {
  StyledIntro,
  IntroLeft,
  IntroH1,
  IntroP,
  BtnMotion,
  StyledBtn,
  IntroRight,
} from "./IntroStyles";
import Eth from "../../picture/Eth.gif";
const Intro = () => {
  return (
    <>
      <StyledIntro>
        <IntroLeft>
          <IntroH1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            Sharing or Minting
          </IntroH1>
          <IntroP
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            A metaverse instagram where people mint their memories.
          </IntroP>
          <Link href="/Feeds" passHref>
            <BtnMotion
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <StyledBtn whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                Getting Started
              </StyledBtn>
            </BtnMotion>
          </Link>
        </IntroLeft>
        <IntroRight
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        >
          <Image src={Eth} alt="eth" className="eth-img" />
        </IntroRight>
      </StyledIntro>
    </>
  );
};

export default Intro;
