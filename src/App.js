import React from 'react';
import Character from './components/Character.js'
// import TestDiv from './components/Character.js';
import useHook from './helper/hook.js';
import './App.css';
import styled from 'styled-components';

// Write your Character component here
const SpreadSheet = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows:    repeat(7, 1fr);
  grid-template-areas: 
    'A1 B1 C1 D1 E1 F1 G1'
    'A  B  C  D  E  F  G'
    'A  B  C  D  E  F  G'
    'A  B  C  D  E  F  G'
    'A  B  C  D  E  F  G'
    'A  B  C  D  E  F  G'
    'A  B  C  D  E  F  G'
    'A  B  C  D  E  F  G'
  ;
  gap: 20px;

  height: 100vh;
  width:  100vw;

  background: #E6E6E6;

  * {
    display: grid;
    place-items: center;
  }

  .char-num {
    * {
      font-size: 1.2em;
      transform: rotate(90deg); 
    }
    /* &:nth-child(1) { grid-area: A1; } */
    &:nth-child(2) { grid-area: B1; }
    &:nth-child(3) { grid-area: C1; }
    &:nth-child(4) { grid-area: D1;}
    &:nth-child(5) { grid-area: E1; }
    &:nth-child(6) { grid-area: F1; }
  }

`;
const D = styled.div`
  /* height: 100%; */
  /* width:  100%; */

  &.info   { 
    grid-area: A;
    font-weight: bold;
    font-size: 2em;
  }
  &:not(.info) {
    font-size: 1.6em;
  }
  &.char-1 { grid-area: B; }
  &.char-2 { grid-area: C; }
  &.char-3 { grid-area: D; }
  &.char-4 { grid-area: E; }
  &.char-5 { grid-area: F; }
  &.char-6 { grid-area: G; }
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const data = useHook(); // side-effect encapsulated in custom hook!

  return (
    <div className="App">
      <SpreadSheet>

        <p className="char-num"><span></span></p>
        <p className="char-num"><span>Character 1</span></p>
        <p className="char-num"><span>Character 2</span></p>
        <p className="char-num"><span>Character 3</span></p>
        <p className="char-num"><span>Character 4</span></p>
        <p className="char-num"><span>Character 5</span></p>
        <p className="char-num"><span>Character 6</span></p>

        <D className="info">
          { data && <Character datum={
            {
              "name": "name",
              "height": "height",
              "mass": "mass",
              "hair_color": "hair color",
              "skin_color": "skin color",
              "eye_color": "eye color",
              "birth_year": "birth year",
              "gender": "gender",
              "homeworld": "homeworld",
              "films": 'films',
              "species": 'species',
              "vehicles": 'vehicles',
              "starships": 'starships',
              "created": "created",
              "edited": "edited",
              "url": "url"
                }
          }/> }
        </D>

        { data && data.map((datum, idx) => {
          return (
            <D className={`char-${idx+1}`}>
              <Character datum={datum}/>
            </D>
          );
        }) }
      </SpreadSheet>
    </div>
  );
}

export default App;
