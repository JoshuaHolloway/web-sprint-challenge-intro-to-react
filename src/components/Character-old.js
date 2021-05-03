import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border: solid darkorchid 5px;
`;

const P = styled.p`
  /* height: 100%; */
  width:  100%;
  border: dashed hotpink 1px;
  &.name {
    font-size: 20px;
  }

`;

const Character = ({datum}) => {

  return (
    <Container>
      <P className="name">{datum.name}</P>
      <P className="height">{datum.height}</P>
      <P chassName="mass">{datum.mass}</P>
      <P chassName="hair">{datum.hair_color}</P>
      <P chassName="skin">{datum.skin_color}</P>
      <P chassName="birth">{datum.birth_year}</P>
      <P chassName="eyes">{datum.eye_color}</P>
      <P chassName="films">{datum.films.map((film) => film)}</P>
      <P chassName="gender">{datum.gender}</P>
      <P chassName="world">{datum.homeworld}</P>
      <P chassName="ships">{datum.starships.map((x) => x)}</P>
      <P chassName="species">{datum.species.map((x) => x)}</P>
      <P chassName="vehicles">{datum.vehicles.map((x) => x)}</P>
    </Container>
  );
};

export default Character;