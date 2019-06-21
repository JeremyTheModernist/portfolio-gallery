import React from 'react';
import Consumer from '../../AppState.js'

class Fullscreen extends React.Component{
  showFullscreen = (context) => {
    return (
      <div className="fullscreen fullscreen--visible" onClick={() => context.toggleFullscreen()}>
        <div className="fullscreen__image">
          <img src={context.selected.src}/>
        </div>
        <div className="fullscreen__title">
            {context.selected.title}
        </div>
      </div>
    )
  }
  hideFullscreen = (context) => {
    return (
      <div className="fullscreen fullscreen--hidden">
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
