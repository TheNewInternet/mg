import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledBlog = styled.div`
  color: #ffffff;
  background-color: #dddddd46;
  height: 33.5rem;
  padding: 0.625rem;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  align-content: center;
`;
export const BlogVideo = styled.video`
  height: 23.75rem;
  width: 23.75rem;
  object-fit: cover;
  border-radius: 0.625rem;
  align-content: center;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
`;
export const BlogImage = styled.img`
  height: 23.75rem;
  width: 23.75rem;
  object-fit: cover;
  border-radius: 0.625rem;
  align-content: center;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
`;
export const BlogStyledText = styled.div`
  margin-top: 0.5rem;
  height: 5rem;
  background-color: #dddddd46;
  border-radius: 0.5rem;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
`;
export const Caption = styled.div`
  height: 3.5rem;
  font-size: 1rem;
  text-align: left;
  padding: 0.5rem 0.6rem;
  overflow: scroll;
`;
export const BlogStyleIcon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 0.5rem;
`;
export const MotionIcon = styled(motion.div)`
  font-size: 0.85rem;
  display: grid;
  align-items: center;
`;
export const ClickedShareIcon = styled(motion.div)`
  color: rgb(0, 255, 179);
  width: 2.65rem;
  font-size: 0.8rem;
  padding: 0.7rem;
`;
export const ShareIcon = styled(motion.div)`
  width: 2.65rem;
  font-size: 0.8rem;
  padding: 0.7rem;
`;
export const ClickedHeartIcon = styled.div`
  color: rgb(255, 77, 77);
  width: 2.65rem;
  font-size: 0.8rem;
  padding: 0.7rem;
`;
export const HeartIcon = styled.div`
  width: 2.65rem;
  font-size: 0.8rem;
  padding: 0.7rem;
`;
