import { CardContainer, StatusText, TotalText } from './Card.styled';

const Card = ({ datas }) => {
  const { status, total } = datas;

  return (
    <CardContainer>
      <StatusText>{status}</StatusText>
      <TotalText status={status}>{parseInt(total).toLocaleString('en-US')}</TotalText>
    </CardContainer>
  );
};

export default Card;
