import React from 'react';

const {Provider, Consumer} = React.createContext();

class AppState extends React.Component{
  state = {
    fullscreen:false,
    selected: {
      src: null,
      title: null
    },
    information: [
      {
        id:1,
        content: {
          title:'Hawainn Island Florals',
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
        if(!state.fullscreen){
          return {
            fullscreen:!state.fullscreen,
            selected: {
              src: payload.src,
              title: payload.title
            }
          }
        }
        else{
          return {
            fullscreen:!state.fullscreen,
            selected: {
              src: null,
              title: null
            }
          }
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
