import React from 'react';
import Consumer from '../../AppState.js'

class Fullscreen extends React.Component{
  showFullscreen = (context) => {
    return (
      <div className="fullscreen fullscreen--visible" onClick={() => context.toggleFullscreen()}>
        <div className="fullscreenContent">
          <div className="fullscreenContent__words col-1">
              <h2 className="fullscreenContent__title">{context.selected.title}</h2>
              <p className="fullscreenContent__description">{context.selected.description}</p>
              <a className="fullscreenContent__link">Contact for More Info</a>
          </div>
          <div className="fullscreenContent__image col-4">
            <img src={context.selected.src}/>
          </div>
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
