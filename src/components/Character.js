import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows:    repeat(7, 1fr);

  height: 100%;
  width: 100%;
  background: darkorchid;
`;
const P = styled.p`
  display: grid;
  place-items: center;
`;

const Character = (props) => {

  const {name, height, mass, hair_color, skin_color, eye_color, birth_year} = props.datum;

  return (
    <Container>
      <P>{name}</P>
      <P>{height}</P>
      <P>{mass}</P>
      <P>{hair_color}</P>
      <P>{skin_color}</P>
      <P>{eye_color}</P>
      <P>{birth_year}</P>
    </Container>
  );
};

export default Character;