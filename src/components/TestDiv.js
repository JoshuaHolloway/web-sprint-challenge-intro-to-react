import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows:    repeat(2, 1fr);

  height: 100%;
  width: 100%;
  background: darkorchid;
`;
const P = styled.p`
  display: grid;
  place-items: center;
`;

const TestDiv = ({data}) => {

  const {name, age} = data;

  return (
    <Container>
      <P>{name}</P>
      <P>{age}</P>
    </Container>
  );
};

export default TestDiv;