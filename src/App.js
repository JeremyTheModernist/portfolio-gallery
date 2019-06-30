import React from 'react';
import './App.scss';
import GridBox from './components/GridBox/GridBox.js';
import {AppState} from './AppState.js';
import Consumer from './AppState.js'
import XSmallImage from './components/Image-XS/XSmall-Image.js';
import SmallImage from './components/Image-Small/Small-Image.js';
import MediumImage from './components/Image-Medium/Medium-Image.js'
import LargeImage from './components/Image-Large/Large-Image.js'
import XLargeImage from './components/Image-XL/XL-Image.js'
import XXLargeImage from './components/Image-XXL/XXL-Image.js';

import Navigation from './components/Navigation/Navigation.js'
import Footer from './components/Footer/Footer.js'
import Quote from './components/Quote/Quote.js'
import Fullscreen from './components/Fullscreen/Fullscreen.js'
import About from './components/About/About.js'

class App extends React.Component{

  render(){
    return (
      <AppState>
        <div className="App">
          <Fullscreen/>
          <About/>
          <Navigation/>
          <GridBox>
            <XSmallImage id={1} empty={true}/>
            <Quote colNum={5} styleName="quote__intro">
              <span className="quote__intro--title">Hello and Welcome,</span><br/><br/>
              Margie McInarnay is a painter living and working out of Alabama. Her work includes a range of
              subjects from detailed botany to rural architecture. Her pieces are often themed around tropical locations.
              All work is available for purchase.
            </Quote>


            <SmallImage id={1}/>
            <LargeImage id={3}/>



            <MediumImage id={6}/>
            <XSmallImage id={1} empty={true}/>
            <SmallImage id={10}/>



            <XSmallImage id={1} empty={true}/>
            <LargeImage id={7}/>
            <XSmallImage id={1} empty={true}/>

            <MediumImage id={8}/>
            <MediumImage id={9}/>


            <XSmallImage id={1} empty={true}/>
            <Quote colNum={5}>
              I have always obsessed over details. When I paint, I am constantly
              examining all of the intracies of my subject. Where is the light?
              What texture is it? How do all of these attributes come together?
            </Quote>

            <MediumImage id={12}/>
            <XSmallImage id={1} empty={true}/>
            <SmallImage id={13}/>

            <SmallImage id={14}/>
            <XSmallImage id={1} empty={true}/>
            <MediumImage id={15}/>

            <XSmallImage id={1} empty={true}/>
            <LargeImage id={17}/>
            <XSmallImage id={1} empty={true}/>

            <XSmallImage id={1} empty={true}/>
            <LargeImage id={16}/>
            <XSmallImage id={1} empty={true}/>

            <MediumImage id={11}/>
            <MediumImage id={18}/>

            <XSmallImage id={1} empty={true}/>
            <Quote colNum={5}>
            There is something extraordinary about stepping into a new place
            filled with its own unique beauty of flora and fauna that inspires
            and motivates me to capture the emotions it invokes.
            </Quote>

            <MediumImage id={19}/>
            <XSmallImage id={1} empty={true}/>
            <SmallImage id={20}/>

          </GridBox>
          <Footer/>
        </div>
      </AppState>

    );
  }

}

export default App;
