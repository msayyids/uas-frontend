import {
  CardWrapper,
  CardTitle,
  CardNumbers,
  NumberItem,
} from "./regionCard.styled";

const RegionCard = ({ name, numbers }) => {
  return (
    <CardWrapper>
      <CardTitle>{name}</CardTitle>
      <CardNumbers>
        <NumberItem status="confirmed" data-title="Confirmed">
          {numbers.confirmed.toLocaleString()}{" "}
          <img  src="src/asset/icons8-protection-mask.png" alt="" />
        </NumberItem>
        <NumberItem status="recovered" data-title="Recovered">
          {numbers.recovered.toLocaleString()}{" "}
          <img src="src/asset/icons8-smiling.png" alt="" />
        </NumberItem>
        <NumberItem status="death" data-title="Deaths">
          {numbers.death.toLocaleString()}{" "}
          <img src="src/asset/icons8-skull.png" alt="" />
        </NumberItem>
      </CardNumbers>
    </CardWrapper>
  );
};

export default RegionCard;
