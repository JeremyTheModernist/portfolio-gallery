import React from 'react';
import './App.scss';
import AppState from './AppState.js'
import GridBox from './components/GridBox/GridBox.js';
import SmallImage from './components/Small-Image/Small-Image.js';
import XXLargeImage from './components/XXL-Image/XXL-Image.js';

const {Provider,Consumer} = React.createContext();

console.log('MY APPSTATE',AppState.Provider)


class App extends React.Component{
  render(){
    return (

        <div className="App">
          <GridBox>
            <AppState>
              <Consumer>
                {
                  (context) => {
                    console.log("APP context", context)
                  }
                }
              </Consumer>
            </AppState>
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

}

export default App;
