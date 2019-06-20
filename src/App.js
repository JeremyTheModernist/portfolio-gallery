import React from 'react';
import './App.scss';
import GridBox from './components/GridBox/GridBox.js';
import {AppState} from './AppState.js';
import Consumer from './AppState.js'
import SmallImage from './components/Small-Image/Small-Image.js';
import XXLargeImage from './components/XXL-Image/XXL-Image.js';

class App extends React.Component{

  render(){
    return (

        <div className="App">
          <AppState>
          <GridBox>
            <SmallImage/>
            <SmallImage/>
            <SmallImage/>
            <SmallImage/>
            <SmallImage/>
            <SmallImage/>
            <XXLargeImage/>
          </GridBox>
        </AppState>
        </div>

    );
  }

}

export default App;
