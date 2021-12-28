import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledIntro = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 3rem calc((100vw - 1300px) / 2);
  margin: 0.5rem 1rem;
  background-color: #dddddd46;
  border-radius: 1rem;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
export const IntroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #f2f2f2;
  padding: 0rem 2rem;
`;
export const IntroH1 = styled(motion.div)`
  margin-bottom: 1rem;
  font-size: 2.8rem;
`;
export const IntroP = styled(motion.div)`
  margin-bottom: 2rem;
  font-size: 1.4rem;
  line-height: 1.5;
`;
export const BtnMotion = styled(motion.div)``;
export const StyledBtn = styled(motion.div)`
  color: #ffffff;
  padding: 1rem 2rem;
  font-size: 1rem;
  background-image: linear-gradient(45deg, #0151ff 0%, #8198fc 100%);
  cursor: pointer;
  border-style: none;
  border-radius: 0.5rem;
  box-shadow: 3px 3px 3px 1px rgba(0, 0, 0, 0.3);
`;
export const IntroRight = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 2rem;
`;
