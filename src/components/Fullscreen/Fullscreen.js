import React from 'react';
import Consumer from '../../AppState.js'
import './Fullscreen.scss'

class Fullscreen extends React.Component{
  showFullscreen = (context) => {
    return (
      <div className="fullscreen fullscreen--visible" onClick={() => context.toggleFullscreen()}>
        <img src={context.src}/>
      </div>
    )
  }
  hideFullscreen = (context) => {
    return (
      <div className="fullscreen fullscreen--hidden">
        <img src={context.src}/>
      </div>
    )
  }
  render(){
    return (
      <Consumer>
        {
          (context) => {
            return (
              context.fullscreen ?
              this.showFullscreen(context)
              :
              this.hideFullscreen(context)
           )
          }
        }
      </Consumer>
    )
  }
}

export default Fullscreen;
