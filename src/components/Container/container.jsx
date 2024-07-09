import styled from "styled-components";

const Container = ({ children }) => {
  const Div = styled.div`
    margin: 0 auto;
  `;
  return (
    <Div>{children}</Div>
  )
};

export default Container;
