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
            <XSmallImage id={1} empty={true}/>
            <Quote colNum={5} styleName="quote__intro">
              <span className="quote__intro--title">Hello, thank you for visiting</span><br/><br/>
              Margie McInarnay is a painter living and working out of Alabama. Her work includes a range of
              subjects from detailed botany to rural architecture, often themed around tropical locations.
              All work is available for purchase.
            </Quote>
            <SmallImage id={3}/>
            <XSmallImage id={1} empty={true}/>
            <MediumImage id={4}/>

            <XSmallImage id={1} empty={true}/>
            <SmallImage id={4}/>
            <XSmallImage id={1} empty={true}/>
            <SmallImage id={3}/>

            <SmallImage id={6}/>
            <XSmallImage id={1} empty={true}/>
            <MediumImage id={5}/>

            <XSmallImage id={1} empty={true}/>
            <Quote colNum={5}>
              I have always obsessed over details. When I paint, I am constantly
              examining all of the intracies of my subject. Where is the light?
              What texture is it? How do all of these attributes come together?
            </Quote>
            <MediumImage id={3}/>
            <XSmallImage id={1} empty={true}/>
            <SmallImage id={4}/>
          </GridBox>
        </div>
      </AppState>

    );
  }

}

export default App;
