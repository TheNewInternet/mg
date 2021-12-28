import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledPostForm = styled(motion.form)`
  width: 25rem;
  margin: 1rem;
  padding: 0.8rem;
  padding-top: 1.6rem;
  background-color: #dddddd46;
  border-radius: 1rem;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
`;
export const StyledFormBtn = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 1rem;
`;
export const CloseBtn = styled(motion.input)`
  width: 5rem;
  padding: 0.65rem;
  color: #ffffff;
  /* background-color: #ffffff44; */
  background-image: linear-gradient(45deg, #ea01ff 0%, #f28fff 100%);
  font-family: Verdana;
  border-style: none;
  border-radius: 0.6rem;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
`;
export const SubmitBtn = styled(motion.input)`
  width: 5rem;
  padding: 0.65rem;
  color: #ffffff;
  /* background-color: #ffffff44; */
  background-image: linear-gradient(45deg, #0151ff 0%, #8198fc 100%);
  font-family: Verdana;
  border-style: none;
  border-radius: 0.6rem;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
`;
export const PostLabel = styled.label`
  background-color: #dddddd46;
  margin: 1.2rem;
  display: flex;
  justify-content: center;
  color: #ffffff;
  border-style: solid;
  border-radius: 0.5rem;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
`;
export const MotionFolder = styled(motion.form)``;
export const StyledFolder = styled(motion.form)`
  display: flex;
  justify-content: center;
  height: 16rem;
  width: 16rem;
`;
export const Folder = styled.label``;
export const ImgInput = styled.input`
  display: none;
  position: relative;
`;
export const PreviewFile = styled.div``;
export const PreviewVideo = styled.video`
  height: 16rem;
  width: 16rem;
  object-fit: cover;
`;
export const PreviewImg = styled.img`
  height: 16rem;
  width: 16rem;
  object-fit: cover;
`;
export const PreviewDltBtn = styled.span`
  position: absolute;
  width: 1rem;
  height: 1rem;
  padding: 1rem;
`;
export const PostText = styled.label`
  background-color: #dddddd46;
  margin: 1.2rem;
  display: flex;
  justify-content: center;
  color: #ffffff;
  border-style: solid;
  border-radius: 0.5rem;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.3);
`;
export const PostTextArea = styled.textarea`
  width: 100%;
  height: 6.25rem;
  padding: 0.5rem;
  color: #f2f2f2;
  align-content: center;
  border-style: none;
  resize: none;
  background-color: transparent;
  ::placeholder {
    color: #ffffff;
  }
`;
export const MotionPlus = styled(motion.div)``;
export const StyledPlusIcon = styled(motion.div)`
  background-image: linear-gradient(45deg, #ea01ff 0%, #f28fff 100%);
  color: #ffffff;
  width: 1rem;
  height: 1rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.3);
`;
