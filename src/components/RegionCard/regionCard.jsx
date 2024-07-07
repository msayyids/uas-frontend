import {
  CardWrapper,
  CardTitle,
  CardNumbers,
  NumberItem,
} from "./regionCard.styled";

import maskImage from "../../asset/icons8-protection-mask.png";
import smileImage from "../../asset/icons8-smiling.png";
import skullImage from "../../asset/icons8-skull.png";

const RegionCard = ({ name, numbers }) => {
  return (
    <CardWrapper>
      <CardTitle>{name}</CardTitle>
      <CardNumbers>
        <NumberItem status="confirmed" data-title="Confirmed">
          {numbers.confirmed.toLocaleString()}{" "}
          <img  src={maskImage} alt="" />
        </NumberItem>
        <NumberItem status="recovered" data-title="Recovered">
          {numbers.recovered.toLocaleString()}{" "}
          <img src={smileImage} alt="" />
        </NumberItem>
        <NumberItem status="death" data-title="Deaths">
          {numbers.death.toLocaleString()}{" "}
          <img src={skullImage} alt="" />
        </NumberItem>
      </CardNumbers>
    </CardWrapper>
  );
};

export default RegionCard;
