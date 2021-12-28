import { faHornbill, faHubspot } from "@fortawesome/free-brands-svg-icons";
import { faShapes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutData = [
  {
    icon: <FontAwesomeIcon icon={faHubspot} />,
    caption: "Influencer backed",
    detail:
      "Metagram is a influencer backed social media that can provide with massive global exposure.",
  },
  {
    icon: <FontAwesomeIcon icon={faHornbill} />,
    caption: "Fair & Transparent",
    detail:
      "Metagram ensures fairness and transparency for everyone through its decentralized nature and support of polygon blockchain.",
  },
  {
    icon: <FontAwesomeIcon icon={faShapes} />,
    caption: "High quality NFTs",
    detail:
      "Metagram has global access to the best upcoming digital assets and selects only top tier projects with the highest industry standards.",
  },
];
export default AboutData;
