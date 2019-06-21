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

import Navigation from './components/Navigation/Navigation.js'
import Quote from './components/Quote/Quote.js'
import Fullscreen from './components/Fullscreen/Fullscreen.js'

class App extends React.Component{

  render(){
    return (
      <AppState>
        <div className="App">
          <Fullscreen/>
          <Navigation/>
          <GridBox>
            <XSmallImage id={1}/>
            <XSmallImage id={2}/>
            <XSmallImage id={2}/>
            <XSmallImage id={2}/>
            <SmallImage id={1}/>
            <MediumImage id={1}/>
            <MediumImage id={1}/>
            <XSmallImage id={1} empty={true}/>
            <Quote>
              I have always obsessed over details. When I paint, I am constantly
              examining all of the intracies of my subject. Where is the light?
              What texture is it? How do all of these attributes come together?
            </Quote>
            <SmallImage id={1}/>
            <XSmallImage id={1} empty={true}/>
            <MediumImage id={1}/>
          </GridBox>
        </div>
      </AppState>

    );
  }

}

export default App;
