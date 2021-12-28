import {
  StyledAbout,
  AboutCard,
  AboutCardIcon,
  AboutCardCaption,
  AboutCardDetail,
} from "./AboutStyles";
import AboutData from "./AboutData";
const About = () => {
  return (
    <StyledAbout>
      {AboutData.map((item, index) => {
        return (
          <AboutCard
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            key={index}
          >
            <AboutCardIcon>{item.icon}</AboutCardIcon>
            <AboutCardCaption>{item.caption}</AboutCardCaption>
            <AboutCardDetail>{item.detail}</AboutCardDetail>
          </AboutCard>
        );
      })}
    </StyledAbout>
  );
};
export default About;
