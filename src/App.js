import React from 'react';
import './App.scss';
import GridBox from './components/GridBox/GridBox.js';
import {AppState} from './AppState.js';
import Consumer from './AppState.js'
import XSmallImage from './components/Image-XS/XSmall-Image.js';
import SmallImage from './components/Image-Small/Small-Image.js';
import MediumImage from './components/Image-Medium/Medium-Image.js'
import LargeImage from './components/Image-Large/Large-Image.js'
import XXLargeImage from './components/Image-XXL/XXL-Image.js';

class App extends React.Component{

  render(){
    return (

        <div className="App">
          <AppState>
          <GridBox>
            <XSmallImage id={1}/>
            <XSmallImage id={2}/>
            <XSmallImage id={2}/>
            <XSmallImage id={2}/>
            <SmallImage id={1}/>
            <MediumImage id={1}/>
            <MediumImage id={1}/>
            <MediumImage id={1}/>
            <LargeImage id={1}/>
            <LargeImage id={2}/>
            <XXLargeImage id={2}/>
          </GridBox>
        </AppState>
        </div>

    );
  }

}

export default App;
