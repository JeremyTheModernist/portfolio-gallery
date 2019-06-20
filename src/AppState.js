import React from 'react';

const {Provider, Consumer} = React.createContext();

class AppState extends React.Component{
  state = {
    information: [
      {
        id:1,
        content: {
          title:'General Title',
          subtitle: 'Great Description'
        }
      },
      {
        id:2,
        content: {
          title:'Specefic Title',
          subtitle: 'Better Description'
        }
      }
  ]
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
