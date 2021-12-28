import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledAbout = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin: 3rem 0rem;
`;
export const AboutCard = styled(motion.div)`
  width: 18rem;
  margin: 3rem;
  padding: 5rem;
  display: grid;
  justify-content: center;
  align-items: center;
  // border-radius: 5rem;
  // box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
  // background-color: #dddddd0c;
`;
export const AboutCardIcon = styled.div`
  padding: 3rem;
  font-size: 10rem;
  text-align: center;
  color: #dddddd46;

  // color: transparent;
  // background-clip: text;
  // background-image: linear-gradient(45deg, #c401ff 0%, #01f7ffe3 100%);
`;
export const AboutCardCaption = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  color: #ffffff;
  text-align: center;
`;
export const AboutCardDetail = styled.div`
  width: 18rem;
  text-align: center;
  font-size: 0.8rem;
  color: #afafaf;
`;
