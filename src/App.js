import React from 'react';
// import Character from './components/Character.js'
import TestDiv from './components/TestDiv.js';
import useFetchData from './helper/fetch.js';
import './App.css';
import styled from 'styled-components';

// Write your Character component here
const SpreadSheet = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows:    repeat(3, 1fr);
  grid-template-areas: 
    'a0 a1 a2'
    'b  c  d'
    'b  c  d'
  ;
  gap: 20px;

  height: 100vh;
  width:  100vw;

  background: black;

  .char-num {
    display: grid;
    place-items: center;

    * {
    transform: rotate(90deg);
    }

    &:nth-child(1) {
      grid-area: a1;
      background: hotpink;
    }
    &:nth-child(2) {
      grid-area: a2;
      background: darkorange;
    }
  }

`;
const D = styled.div`
  /* height: 100%; */
  /* width:  100%; */

  &.info   { grid-area: b;}
  &.char-1 { grid-area: c; }
  &.char-2 { grid-area: d; }
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // const data = useFetchData(); // side-effect encapsulated in custom hook!

  return (
    <div className="App">
      <SpreadSheet>

        <p className="char-num"><span>Character 0</span></p>
        <p className="char-num"><span>Character 1</span></p>

        <D className="info">
          <TestDiv data={{name: 'name', age: 'age'}}/>
        </D>

        <D className="char-1">
          <TestDiv data={{name: 'josh', age: 37}}/>
        </D>

        <D className="char-2">
          <TestDiv data={{name: 'josh', age: 37}}/>
        </D>

        {/* { data && data.map((datum) => <Character datum={datum}/>) } */}
      </SpreadSheet>
    </div>
  );
}

export default App;
