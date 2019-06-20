import React from 'react';
import './App.scss';
import GridBox from './components/GridBox/GridBox.js'
import SmallImage from './components/Small-Image/Small-Image.js'

function App() {
  return (
    <div className="App">
      <GridBox>
        <SmallImage/>
        <SmallImage/>
        <SmallImage/>
        <SmallImage/>
        <SmallImage/>
        <SmallImage/>
      </GridBox>
    </div>
  );
}

export default App;
