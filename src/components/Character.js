import React from "react";
import styled from 'styled-components';

// Write your Character component here
const WrapperDiv = styled.div`
  /* padding: 20px; */
  display: grid;
  /* gap: 10px; */

  grid-template-columns: repeat(1, 1fr);
  grid-template-rows:    repeat(5, 1fr);

  /* @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat( calc( 100 / 2 ), 1fr);
  } */

  width: 100%;

  border: solid 1px hotpink;
`;

const Container = styled.div`
  width: 100%;
  border: dashed darkorchid 1px;
`;

const Character = ({datum}) => {

  console.log('Character: ', datum);

  return (
    <WrapperDiv>
      <Container><p>{datum.name}</p></Container>
      <Container><p>{datum.height}</p></Container>
      <Container><p>{datum.mass}</p></Container>
      <Container><p>{datum.hair_color}</p></Container>
      <Container><p>{datum.skin_color}</p></Container>
      <Container><p>{datum.birth_year}</p></Container>
      <Container><p>{datum.eye_color}</p></Container>
      <Container><p>{datum.films.map((film) => film)}</p></Container>
      <Container><p>{datum.gender}</p></Container>
      <Container><p>{datum.homeworld}</p></Container>
      <Container><p>{datum.starships.map((x) => x)}</p></Container>
      <Container><p>{datum.species.map((x) => x)}</p></Container>
      <Container><p>{datum.vehicles.map((x) => x)}</p></Container>
    </WrapperDiv>
  );
};

export default Character;