import React from 'react';
import Character from './components/Character.js'
import useFetchData from './helper/fetch.js';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const data = useFetchData(); // side-effect encapsulated in custom hook!
  console.log('data');

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

      {data && data.map((datum) => {
        return (
          <Character datum={datum}/>
        );
      })}
    </div>
  );
}

export default App;
