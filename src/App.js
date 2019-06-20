import React from 'react';
import './App.scss';
import GridBox from './components/GridBox/GridBox.js';
import SmallImage from './components/Small-Image/Small-Image.js';
import XXLargeImage from './components/XXL-Image/XXL-Image.js';

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
        <XXLargeImage/>
      </GridBox>
    </div>
  );
}

export default App;
