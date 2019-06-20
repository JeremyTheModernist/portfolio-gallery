import React from 'react';

const {Provider, Consumer} = React.createContext();

class AppState extends React.Component{
  state = {
    fullscreen:false,
    src: null,
    words: 'cool',
    information: [
      {
        id:1,
        content: {
          title:'General Title',
          subtitle: 'Great Description',
          src: 'http://drp.mk/i/1z7YGPxCQ6.jpg'
        }
      },
      {
        id:2,
        content: {
          title:'Specefic Title',
          subtitle: 'Better Description',
          src: 'http://drp.mk/i/FxDhkqCZ8C.jpg'
        }
      }
    ],
    toggleFullscreen: (payload) => {
      this.setState((state) => {
        return {
          fullscreen:!state.fullscreen,
          src: payload
        }
      })
      console.log('received payload',payload)
    }
  }
  render(){
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}

export {AppState as AppState};

export default Consumer;
